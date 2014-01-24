# RequestFrame.js

`requestAnimationFrame` _crossbrowser_ et compteur de FPS.

### Exemple

```js
var fps = new FPS();

(function loop()
{
    newFrame(loop);

    // Exécuté ~60 fois par seconde

    fps.next();
})();

setTimeout(function(){ console.log( fps.getFps() ); }, 800);
setTimeout(function(){ console.log( fps.getFps() ); }, 1600);
```

Affiche `"60.6"` et `"60.1"`.

### Références

###### Fonctions

* `newFrame(callback)` _int_ Créé et renvois l'ID d'une `requestAnimationFrame`. Execute `callback` dans _1/60 de seconde_.

* `stopFrame(requestId)` _void_ Annule la `requestAnimationFrame` avec l'ID `requestId`.

##### class FPS

###### Propriétés

Les propriétés sont utilisés par les méthodes.

* `.frames` _(int)_ Frames depuis `startTime`.
* `.startTime` _(long)_ Temps du premier `.next()`.

* `.lastFrames` _(int)_ Frames depuis `lastUpdate`.
* `.lastUpdate` _(long)_ Temps depuis le dernier `.getFps()`.

###### Methodes

* `.next()` _void_ Indique au compte une nouvelle frame. _A executer à chaque frame !_
* `.getFps()` _int_ Retourne le nombre de FPS depuis le _dernier_ `.getFps()`.
* `.getAverage()` _int_ Retourne la moyenne de FPS depuis le _premier_ `.next()`.
* `.reset()` _void_ Remet à zéro toute les propriétés.

### License

> The MIT License (MIT)
> 
> Copyright (c) 2013-2014 juloo
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
