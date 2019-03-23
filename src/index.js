// import css from 'style-loader!css-loader?sourceMap!./style.css';
import css from 'style-loader/url!file-loader!./style.css';
import imgUrl from 'file-loader!./imgs/photo.jpg';
document.addEventListener('DOMContentLoaded', () => {
  const cssValue = css;
  const tostr = cssValue.toString();
  const toJson = JSON.stringify(cssValue);
  console.log(tostr);
  console.log(toJson);
  const newDiv = document.createElement('div');
  document.body.appendChild(newDiv);
  newDiv.id = 'newDiv';
  const image = new Image();
  const _url = imgUrl.toString();
  image.src = _url;
  newDiv.appendChild(image);
});
