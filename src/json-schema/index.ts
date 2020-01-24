
import { XSD2JSON_TYPE_MAP } from './xsd-json-schema-map';
import { JSONSchema7 } from 'json-schema';

const IGNORED_KEYS = [ 'targetNamespace', 'targetNSAlias' ];

const isIgnoredKey = (key: string) => IGNORED_KEYS.includes(key);
const isArrayKey = (key: string) => key.endsWith('[]');
const getArrayKeyName = (key: string) => key.replace('[]','');

export const getJSONSchemaProperty = (xsdKey: string) => XSD2JSON_TYPE_MAP[xsdKey];

export function getJSONSchema(xsdObj: any) {
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
				items: typeOfProperty !== 'object' ? getJSONSchemaProperty(propValue) : getJSONSchema(propValue)
			}
			result.required.push(arrayKeyName);
		} else if (typeOfProperty === 'object') {
			result.properties[key] = getJSONSchema(propValue);
			result.required.push(key);
		}else if ( typeOfProperty === 'string' ) {
			result.properties[key] = getJSONSchemaProperty(propValue);
			result.required.push(key);
		}
	});
	return result;
}