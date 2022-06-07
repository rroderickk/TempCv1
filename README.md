# The Oneliner
```
ga. && gcm "[] " && gpo gh-pages && deploy

```
# PlatziCards
## Demo
<img src="./sc1.png" alt="1"/>
<img src="./sc2.png" alt="2"/>
<img src="./sc3.png" class="fit-image" alt="3"/>
<img src="./sc4.png" class="fit-image"alt="4"/>

# Regex
```
////////////////////////////// Los contadores {a,b} /////////////////////////////

// Es un contador que indica de manera precisa la cantidad que se repita un tipo de caracteres
// {a,a}:  nos indica el intervalo de caracteres que quiero que aparezcan
// Hay lenguajes que se puede colocar un sólo valor en el corchete, ejemplo {a}

// Ejemplo:

var e = /\d\d\d/; // Encuentra tres dígitos seguidos pero podemos ser más resumidos

var e = /\d{2,2}/; // Encuentra dos dígitos seguidos

var e = /\d{2,5}/; // Encuentra mínimo dos y máximo 6 dígitos seguidos

var e = /\d{4,}/; // Encuentra mínimo dos y hasta infinitos dígitos seguidos

// Ojo, los caracteres reservados de las regex deben escaparse con '\', ejemplo '\.', '\-'

// Ejemplo télefono 10 digitos separados por '-', '.'
var e = /\d{2,2}\-?\d{2,2}\-?\d{2,2}\-?\d{2,2}\-?\d{2,2}\-?/; // Sólamente me toma el guión '-'

var e = /\d{2,2}[\-\.]?\d{2,2}[\-\.]?\d{2,2}[\-\.]?\d{2,2}[\-\.]?\d{2,2}[\-\.]?/; // Agregamos el punto '.' creando una clase específica '[\-\.]'

var e = /(\d{2,2}[\-\.]?){5,5}/; // La expresión que se repite 5 veces (\d{2,2}[\-\.]?) se puede reducir

var e = /(\d{2,2}[\-\.\s]?){5,5}/; // Si el télefono contiene además espacios cada dos dígitos

var e = /(\d\d[\-\.\s]?){4,4}\d\d/; // También se traduce a esto

// Tips: los contadores también se puede resumir a los delimitadores de la siguiente manera
// * ~ {0,}
// + ~ {1,}
// ? ~ {0,1}

```
#celulares colombianos
```
3\d{2,2}[\-\.\s]?\d{3,3}[\-\.\s]?\d{2,2}[\-\.\s]?\d{2,2}

\d{1,10}[\-\.]?

Para buscar números telefónicos fijos en Colombia, podemos usar la siguiente clase:

\d{3}[\-\. ]?\d{2}[\-\. ]?\d{2}
```

#Filtrando correo electronico
```

^[a-z0-9]{1,20}\@\w{1,10}\.\w+[\com]$
```

Hice la expresión regular para los números de teléfono que se muestran en la clase y esto fue lo que me salió (funciona muy bien)
```

/\d{2,3}\-?\.?\d{2,3}\-?\.?\d{2,4}\-?\.?[0-9\.\-]+/gm 

La expresión regular:

\d{2,2}[\-\.]?\d{2,2}[\-\.]?\d{2,2}[\-\.]?
También lo pude resolver así:

(\d{2,2}[ .-]?){5,5}

```

```
Delimitador ?:
Los matches los hace lo más pequeños posibles.
Es decir: Haz el match, pero los divides en grupos pequeños.

Ejemplo:

.+?
Encuentra todos los caracteres y haces matches pequeños.
```

#email
```

\w+\@\w+\.\w+\.*\w*

.+[@].+[\.].+

[\w\+?.?]{1,}@[0-9a-zA-Z]{1,}.{1,1}\w{1,}


\w+@[a-zA-Z]+\.com

[\w\-\+]{1,64}@[\w\-]{1,255}\.[A-Za-z]{2,10}\.[A-Za-z]{2,2}

Creo que esta sería una buena expresión para encontrar cualquier tipo de correo independientemente del TLD o del proveedor de correo electrónico que use el usuario.

\w+@\w+\.[a-zA-Z]{2,4}
```

Para estructuras json

```
{"card":"2","numbers":{"Conway":[1,11,21,1211,111221,312211],"Fibonacci":[0,1,1,2,3,5,8,13,21,34]}}

```

Para buscar cada uno de los <tag></tag> o <tag/> en html

```
<.+?>

```
