import React from 'react';
import ReactHtmlParser from 'react-html-parser'; 
 
let base64data = 'DQogICAgICAgICAgICAgICAgICAgICAgICA8aHRtbD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGVhZD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWV0YSBjaGFyc2V0PSdVVEYtOCc+IA0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZT4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZSB7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXIgew0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmVlbjsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZSB7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmVlbjsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGQsIHRoIHsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4Ow0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlIHRoIHsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWQ+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJvZHk+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2hlYWRlcic+PGgxPuC4leC4o+C4p+C4iOC5gOC4iuC5h+C4hOC4reC4uOC4m+C4geC4o+C4k+C5jOC4iOC5iOC4suC4ouC4meC5ieC4s+C4ouC4sjwvaDE+PC9kaXY+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHA+4LmA4Lil4LiC4LiX4Li14LmI4LmD4Lia4LiH4Liy4LiZIEpPSzAxLTIyMDgxOS0wMDg8L3A+PC9kaXY+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHA+4Lin4Lix4LiZ4LiX4Li14LmI4LiZ4Lix4LiU4Lir4Lih4Liy4LiiIDIwMjIwODE5PC9wPjwvZGl2Pg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxwPuC4guC5ieC4reC4oeC4ueC4peC5g+C4muC4h+C4suC4mTwvcD48L2Rpdj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48cD7guKPguKvguLHguKrguKPguYnguLLguJnguITguYnguLIgSzAwMDc8L3A+PC9kaXY+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHA+4LiK4Li34LmI4Lit4Lij4LmJ4Liy4LiZ4LiE4LmJ4LiyIE9pc2hpIEdyb3VwIFBDTC4gKE9pc2hpIFJhbWVuKTwvcD48L2Rpdj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48cD7guKrguLLguILguLIgT2lzaGkg4LmA4LiU4Lit4Liw4Lih4Lit4Lil4Lil4LmMIOC4h+C4suC4oeC4p+C4h+C4qOC5jOC4p+C4suC4mSDguIrguLHguYnguJk1PC9wPjwvZGl2Pg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxwPuC4l+C4teC5iOC4reC4ouC4ueC5iCDguYDguKXguILguJfguLXguYjguKvguYnguK3guIcgNTM2IOC4iuC4seC5ieC4mSA1IOC5gOC4peC4guC4l+C4teC5iCA0MDgsIDQxMCwgNDEyLCA0MTQsIDQxNiwgNDE4LCA0MjAsIDQyMiwgNDI0LCA0MjYsIDQyOCwgNDMwLCA0MzAvMSDguJbguJnguJnguIfguLLguKHguKfguIfguKjguYzguKfguLLguJkg4LiV4Liz4Lia4Lil4Lia4Liy4LiH4LmA4LiC4LiZIOC4reC4s+C5gOC4oOC4reC5gOC4oeC4t+C4reC4h+C4meC4meC4l+C4muC4uOC4o+C4tSDguIjguLHguIfguKvguKfguLHguJTguJnguJnguJfguJrguLjguKPguLUgMTEwMDA8L3A+PC9kaXY+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHA+4Lit4Li14LmA4Lih4LilIHRlc3RAb2lzaGkuY29tPC9wPjwvZGl2Pg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxwPuC5guC4l+C4o+C4qOC4seC4nuC4l+C5jCAwODMwNTU1NVhYPC9wPjwvZGl2Pg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxwPkJhcmNvZGUgT1QtQUlSRElTPC9wPjwvZGl2Pg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxwPuC4iuC4t+C5iOC4reC4reC4uOC4m+C4geC4o+C4k+C5jCBBaXIgRGlzcGVuc2VyPC9wPjwvZGl2Pg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxwPlNlcmlhbCBObyBzZXJpYWw8L3A+PC9kaXY+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHA+TG90IE5vIDwvcD48L2Rpdj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGFsaWduPSdjZW50ZXInPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCB3aWR0aD0nMzAlJz4yLjFCPC90aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTwvdGQ+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHdpZHRoPSczMCUnPjIuMUE8L3RoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xPC90ZD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjIuMi4xQjwvdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4yLjIuMUE8L3RoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xPC90ZD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjIuMi4yQjwvdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4yLjIuMkE8L3RoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xPC90ZD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjIuM0I8L3RoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xPC90ZD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Mi4zQTwvdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Mi40QjwvdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4yLjRBPC90aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTwvdGQ+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4yLjVCPC90aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTwvdGQ+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjIuNUE8L3RoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xPC90ZD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjIuNkI8L3RoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xPC90ZD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Mi42QTwvdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Mi43QjwvdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4yLjdBPC90aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTwvdGQ+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4yLjhCPC90aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MDwvdGQ+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjIuOEE8L3RoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4wPC90ZD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjMuMTwvdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjI8L3RkPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjMuMjwvdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+My4zPC90aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTwvdGQ+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+My40PC90aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTwvdGQ+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYm9keT4NCiAgICAgICAgICAgICAgICAgICAgICAgIDwvaHRtbD4=';
let pdf = Buffer.from(base64data, 'base64').toString('utf8');
   
class DataComponent extends React.Component {
    render() {
        console.log(this.props.data);
      return (
        <div> { ReactHtmlParser (pdf) } </div>     
      );
    }
  }
 
  export default DataComponent;