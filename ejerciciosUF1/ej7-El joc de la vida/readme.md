

# Exercici 7 - EL joc de la Vida

https://ca.wikipedia.org/wiki/Joc_de_la_vida

https://www.youtube.com/watch?v=omMcrvVGTMs&feature=emb_logo

Crea la llibreria `funciones.js` amb les funcions que es demanen a cadascú dels exercicis

## Tasca 1
Crea una funció `dibujaUniverso()` que rebi com a paràmetres les variables columnas (x) i filas (y) i retorni una matriu basada en divs d’aquestes dimensions. Per exemple, si fem aquesta crida: dibujaUiverso(2,3) la funció retornaria una matriu de 2 x 3 amb aquest codi:

<div>
  <div>
    <div id=”0-0”>0-0</div>
    <div id=”0-1”>0-1</div>
    <div id=”0-2”>0-2</div>
  </div>
  <div>
    <div id=”1-0”>1-0</div>
    <div id=”1-1”>1-1</div>
    <div id=”1-2”>1-2</div>
  </div>
</div>

**TEST**
![Alt text](image.png)


## Tasca 2
Crea una funció `aleatorio()` que retorni un boolea que serà `true` un 50% de les vegades i `false` un altre 50%.

**TEST ej2**
![Alt text](image-1.png)

## Tasca 3
Crea una funció `aleatorio2()` que rebi com a paràmetre la variable porcentaje i retorni un boolea que serà de vegades `true` i de vegades `false`, en el porcentatge que tingui la variable que rep. Fes servir aquest test per verificar el funcionament de la teva funció:

**TEST ej3**

Per fer aquest test: Crea una funció que cridi a aleatorio2(30) de manera ciclica (10000 vegades) y retorni el número de vegades que dona `true` (en percentatge), que hauria de ser proper a 30.00
![Alt text](image-2.png)


## Tasca 4
Crea una funció `CrearMatriz()` que rebi el número de columnes i files i retorni una array  (matriz_previa) de dues dimensions. A continuació l’ha d’omplir de `true` o `false` de manera aleatoria segons el que retorni la funció `aleatorio()`.

**TEST**

El test fa servir una funció que modifica el color de fons (gris = true = viva) dels divs de l’univers en funció del contingut de l’array matriz_previa.

Prenent F5 veuràs com canvien les caselles vives o mortes




