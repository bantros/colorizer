# [Colorizer](http://colorizer.bantros.net/)

Experiment with CSS Blend Modes to reproduce the effects of [Spotify's brand identity.](http://www.wearecollins.com/work/spotify/)

Demo available at [colorizer.bantros.net.](http://colorizer.bantros.net/)

![](http://colorizer.bantros.net/assets/images/screenshot.jpg)

Just add the following to your stylesheet:

```css
.colorizer {
  position: relative;
}

.colorizer::before,
.colorizer::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.colorizer::before {
  z-index: 2500;
  background-color: #e6625e;
  mix-blend-mode: multiply;
}

.colorizer::after {
  z-index: 2750;
  background-color: #15a29c;
  mix-blend-mode: lighten;
}

.colorizer__image {
  filter: contrast(110%) grayscale(100%);
}
```

* Palette from [ColorClaim by Tobias Van Schneider](http://www.vanschneider.com/colors/)
* Idea from this [Medium post by @pierrellev](https://medium.com/@pierrellev/reproduce-colorizer-effect-of-spotify-71d5de88039f#.5e388ify9) on how to achieve the same effect in Photoshop

### Notes

* Not supported in [Edge or Internet Explorer](http://caniuse.com/#search=mix-blend-mode)
