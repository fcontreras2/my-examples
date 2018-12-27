### Dumb y Smart Component Atom text.

Config: Abrir el archivo `Edit` -> `Snippets` y agregar lo siguiente:

```
 '.source.js':
   'React Dumb Component':
     'prefix': 'reactdumb'
     'body': 'import React from \'react\';\nimport injectSheet from \'react-jss\';\n\nconst style = {\n\tcontainer:{}\n}\n\nconst $1 = ({classes}) => (\n\t<div className={classes.container}>\n\t</div>\n)\n\nexport default injectSheet(styles)($1);\n'
   'React Smart Component':
    'prefix': 'reactsmart'
    'body': '
      import React, { Component } from \'react\';\n\nclass $1 extends Component {\n\tstatic defaultProps = {};\n\tstate = {}\n\n\trender() {\n\t\treturn <div></div>\n\t}\n}\n\nexport default $1;\n'

```

### Uso
Abrir un archivo nuevo y ejecutar lo siguiente:

- Dumb Componente:  `reactdumb` `+` `Tab`
- Smart Componente: `reactsmart` `+` `Tab`
