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
* `.getFps()` _int_ Renvois le nombre de FPS depuis le _dernier_ `.getFps()`.
* `.getAverage()` _int_ Renvois la moyenne de FPS depuis le _premier_ `.next()`.
* `.reset()` _void_ Remet à zéro toute les propriétés.