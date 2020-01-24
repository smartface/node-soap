
import { XSD2JSON_TYPE_MAP } from './xsd-json-schema-map';
import { JSONSchema7 } from 'json-schema';

const IGNORED_KEYS = [ 'targetNamespace', 'targetNSAlias' ];

const isIgnoredKey = (key: string) => IGNORED_KEYS.includes(key);
const isArrayKey = (key: string) => key.endsWith('[]');
const getArrayKeyName = (key: string) => key.replace('[]','');

/**
 * @function getJSONSchemaObjectByTheXSDKey
 * get by the given xsd key to json-schema object.
 * @param xsdKey string 
 * @returns JSONSchema7 json-schema object
 */
export const getJSONSchemaByTheXSDKey = (xsdKey: string) => XSD2JSON_TYPE_MAP[xsdKey];

/**
 * @function getJSONSchema
 * convert given xsd object to json-schema object.
 * @param xsdObj object
 * @returns JSONSchema7 json-schema object
 */
export function convertFromXSDToJSONSchema(xsdObj: any) {
	const result: JSONSchema7 = { 
		type: 'object',
		properties: {},
		required: []
	};
	const keys = Object.keys(xsdObj).filter((key) => !isIgnoredKey(key));
	keys.forEach( (key) => {
		const propValue = xsdObj[key];
		const typeOfProperty = typeof propValue;
		if(isArrayKey(key)){
			const arrayKeyName = getArrayKeyName(key);
			result.properties[arrayKeyName] = { 
				type: 'array',  
				items: typeOfProperty !== 'object' ? getJSONSchemaByTheXSDKey(propValue) : convertFromXSDToJSONSchema(propValue)
			}
			result.required.push(arrayKeyName);
		} else if (typeOfProperty === 'object') {
			result.properties[key] = convertFromXSDToJSONSchema(propValue);
			result.required.push(key);
		}else if ( typeOfProperty === 'string' ) {
			result.properties[key] = getJSONSchemaByTheXSDKey(propValue);
			result.required.push(key);
		}
	});
	return result;
}