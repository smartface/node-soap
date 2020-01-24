
// Ref: https://github.com/lcahlander/xsd2json
export const XSD2JSON_TYPE_MAP : { [key: string]: { [key: string]: any} } = {
	'xs:anySimpleType': { 'type': ['integer','string', 'boolean', 'null'] },
	'xs:anyURI': {
    	'type': 'string',
    	'pattern': '^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?'
	},
	'xs:base64Binary': {
		'type': 'string',
		'pattern': '^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$'
	},
	'xs:boolean': { 'type': 'boolean'},
	'xs:byte': { 'type': 'integer' },
	'xs:date': {
		'type': 'string',
		'pattern': '^\\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$'
	},
	'xs:dateTime': {
		'type': 'string',
		'pattern': '^([\\+-]?\\d{4}(?!\\d{2}\\b))((-?)((0[1-9]|1[0-2])(\\3([12]\\d|0[1-9]|3[01]))?|W([0-4]\\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\\d|[12]\\d{2}|3([0-5]\\d|6[1-6])))(T((([01]\\d|2[0-3])((:?)[0-5]\\d)?|24\\:?00)([\\.,]\\d+(?!:))?)?(\\17[0-5]\\d([\\.,]\\d+)?)?([zZ]|([\\+-])([01]\\d|2[0-3]):?([0-5]\\d)?)?)?)?$'
	},
	'xs:integer': { 'type': 'integer' },
	'xs:int': { 'type': 'integer' },
	'xs:long': { 'type': 'integer' },
	'xs:decimal': { 'type': 'integer' },
	'xs:double': { 'type': 'integer' },
	'xs:float': { 'type': 'integer' },
	'xs:duration': {
		'type': 'string',
		'pattern': '^P(?!$)(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(T(?=\\d+[HMS])(\\d+H)?(\\d+M)?(\\d+S)?)?$'
	},
	'xs:ENTITIES': {
		'type': 'array',
		'items': {
			'type': 'string',
			'pattern': '^[A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][-.0-9A-Z_a-z\\u00B7\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u203F\\u2040\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD]*$'
		}
	},
	'xs:ENTITY': {
		'type': 'string',
		'pattern': '^[A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][-.0-9A-Z_a-z\\u00B7\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u203F\\u2040\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD]*$'
	},
	'xs:gDay': {
		'type': 'string',
		'pattern': '^(0[1-9]|[12][0-9]|3[01])$'
	},
	'xs:gMonthDay': {
		'type': 'string',
		'pattern': '^(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$'
	},
	'xs:gMonth': {
		'type': 'string',
		'pattern': '^(0[1-9]|1[012])$'
	},
	'xs:gYearMonth': {
		'type': 'string',
		'pattern': '^(19|20)\\d\\d-(0[1-9]|1[012])$'
	},
	'xs:gYear': {
		'type': 'string',
		'pattern': '^(19|20)\\d\\d$'
	},
	'xs:hexBinary': {
		'type': 'string',
		'pattern': '^([0-9a-fA-F]{2})*$'
	},
	'xs:IDREF': {
		'type': 'string',
		'pattern': '^[A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][-.0-9A-Z_a-z\\u00B7\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u203F\\u2040\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD]*$'
	},
	'xs:IDREFS': {
		'type': 'string',
		'pattern': '^[A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][-.0-9A-Z_a-z\\u00B7\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u203F\\u2040\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD]*$'
	},
	'xs:ID': {
		'type': 'string',
		'pattern': '^[A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][-.0-9A-Z_a-z\\u00B7\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u203F\\u2040\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD]*$'
	},
	'xs:language': {
		'type': 'string',
		'pattern': '^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$'
	},
	'xs:Name': {
		'type': 'string',
		'pattern': '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][-.0-9:A-Z_a-z\\u00B7\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u203F\\u2040\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD]*$'
	},
	'xs:NCName': {
		'type': 'string',
		'pattern': '^[A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][-.0-9A-Z_a-z\\u00B7\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u203F\\u2040\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD]*$'
	},
	'xs:negativeInteger': {
		'type': 'integer',
		'maximum': 0,
		'exclusiveMinimum': true
	},
	'xs:NMTOKEN': {
		'type': 'string',
		'pattern': '^[A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][-.0-9A-Z_a-z\\u00B7\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u203F\\u2040\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD]*$'
	},
	'xs:NMTOKENS': {
		'type': 'array',
		'items': {
			'type': 'string',
			'pattern': '^[A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][-.0-9A-Z_a-z\\u00B7\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u203F\\u2040\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD]*$'
		}
	},
	'xs:nonNegativeInteger': {
		'type': 'integer',
		'minimum': 0,
		'exclusiveMinimum': false
	},
	'xs:nonPositiveInteger': {
		'type': 'integer',
		'maximum': 0,
		'exclusiveMaximum': false
	},
	'xs:positiveInteger': {
		'type': 'integer',
		'minimum': 0,
		'exclusiveMinimum': true
	},
	'xs:normalizedString': { 'type': 'string' },
	'xs:string': { 'type': 'string' },
	'xs:QName': {
		'type': 'string',
		'pattern': '^[A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][-.0-9A-Z_a-z\\u00B7\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u203F\\u2040\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD]*:[A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][-.0-9A-Z_a-z\\u00B7\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u203F\\u2040\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD]*$'
	},
	'xs:short': {
		'type': 'integer',
		'minimum': -32768,
		'maximum': 32767,
		'exclusiveMinimum': false,
		'exclusiveMaximum': false
	},
	'xs:time': {
		'type': 'string',
		'xsdType': 'time',
		'pattern': '^([01]\\d|2[0-3]):([0-5]\\d)(?::([0-5]\\d)(.(\\d{3}))?)?$'
	},
	'xs:token': { 'type': 'string' },
	'xs:unsignedByte': {
		'type': 'integer',
		'minimum': 0,
		'maximum': 255,
		'exclusiveMinimum': false,
		'exclusiveMaximum': false
	},
	'xs:unsignedInt': {
		'type': 'integer',
		'minimum': 0,
		'maximum': 4294967295,
		'exclusiveMinimum': false,
		'exclusiveMaximum': false
	},
	'xs:unsignedLong':{
		'type': 'integer',
		'minimum': 0,
		'maximum': 18446744073709551615,
		'exclusiveMinimum': false,
		'exclusiveMaximum': false
	},
 	'xs:unsignedShort': {
		'type': 'integer',
		'minimum': 0,
		'maximum': 65535,
		'exclusiveMinimum': false,
		'exclusiveMaximum': false
	}
}