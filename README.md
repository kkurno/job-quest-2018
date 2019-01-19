# Apply for a "Front-End" job
  สวัสดีครับ ขออนุญาตส่งงานนะครับ ในที่นี้ใช้ React รวมกับ libraries เสริมที่สำคัญดังนี้
  - styled-component
  - prop-types
  - redux, react-redux
  - redux-saga
  - recompose
  - react-virtualized สำหรับทำ list ซึ่งมีคอนเซ็ปต์ว่าจะ render component ลงใน DOM เฉพาะอันที่มองเห็นเท่านั้น (จริงๆอาจจะมี render เกินมานิดหน่อยถ้าลอง
    inspect ดู)
  - axios
  
### Answer questions
  1. Please explain a situation that using Redux to manage application state is more helpful than original React's state.
  - กรณีที่ component หนึ่งต้องการทราบค่า state ของอีก component หนึ่งโดยที่ไม่เกี่ยวข้องกัน (ไม่ได้เป็น child-parent กัน)
    - ถ้าใช้ React's state ล้วนๆ สิ่งที่ทำได้คือสร้าง parent component มาครอบ component ทั้งสองอันนั้นและย้าย state ที่ต้องการทราบไปที่ parent component เพื่อที่จะสามารถส่ง state นั้นไปเป็น prop ไปให้ component ที่ต้องการได้ (เหมือนผู้หญิงที่อยากจะใช้นามสกุลเดียวกันกับผู้ชาย จะต้องแต่งงานเป็นทองแผ่นเดียวกันก่อน) ซึ่งถ้าหากเกิดกรณีนี้ขึ้นบ่อยๆ เราอาจจะได้ nested component ที่รกรุงรังเหมือนดังรากฝอยของพืชก็ได้.
    - ดังนั้น Redux จึงเกิดมาเพื่อแก้ปัญหานี้โดยจะมีสิ่งที่เรียกว่า store ซึ่งมันคือที่ที่เอาไว้รวม state หลายๆอย่างใน application และในส่วนนี้แหละครับที่เราสามารถสร้าง state ที่เราต้องการ share ให้กับ component ต่างๆไว้ในนั้นได้ ซึ่งไม่ว่า component ที่ต้องการค่าใน store จะอยู่ในชั้นที่ลึกแค่ไหนก็ตาม store ก็ยังสามารถส่งค่าไปให้กับมันได้ ดังนั้นเราจึงไม่จำเป็นต้องสร้าง parent component มาครอบแบบวิธีการจัดการด้วย React's state ล้วนๆอีกแล้ว (แต่จริงๆ ถ้าใช้ react-redux มันก็ใช้วิธีการสร้าง parent component มาครอบนะ เพียงแต่มันครอบ root component เอาไว้เลยแล้วทำการ subscribe เพียงครั้งเดียว จากนั้นก็ส่งค่าใน store ผ่านไปให้ children component ในรูปแบบ ของ context แล้วถ้าเกิด component ไหนต้องการเข้าถึงค่านั้นๆ ก็ให้ใช้การ connect ของ react-redux แทนการ subscribe).
  - ถ้าเราใช้ redux + redux devtool เราจะสามารถทำ time travel ได้ ซึ่งก็คือการเก็บประวัติการ dispatch action เอาไว้ และเราสามารถดูค่า state ที่เปลี่ยนไปในแต่ละ step ของการ dispatch ได้ รวมทั้งยังสามารถย้อนไปยัง step ใดๆก็ได้อีกด้วย.

  2. Why do we need "Server-Side Rendering". Please explain.<br />
  &nbsp;&nbsp;&nbsp;&nbsp;(อธิบายโดยอ้างอิงจาก googlebot) การที่ googlebot จะเก็บรวบรวมข้อมูล website ต่างๆเพื่อนำมาใช้จัดลำดับและแสดงผลใน search engine นั้นมันจะใช้เทคโนโลยีที่ชื่อว่า web crawler ซึ่งเมื่อสมัยก่อน ตัว web crawler ที่ googlebot ใช้ยังไม่สามารถเข้าใจ javascript ได้ จึงทำให้เวลา googlebot ไปเก็บข้อมูลเว็บไซต์ที่ใช้ javascript ในการ render นั้นจะเก็บข้อมูลได้แค่ส่วนที่เป็น html ซึ่งถ้ายกตัวอย่างจากเว็บที่ใช้ React ในการพัฒนาและไม่ได้ทำ server side rendering ก็คือจะเก็บข้อมูลได้แค่ไฟล์ index.html ที่รูปร่างตามด้านล่าง.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="theme-color" content="#000000" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>Chuck Norris's Joke</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```
  &nbsp;&nbsp;&nbsp;&nbsp;ซึ่งถ้าเป็นเช่นนั้น ลำดับของเว็บไซต์ใน search engine ก็จะอยู่ในลำดับที่ต่ำมาก เนื่องจากมันถูกมองว่าไม่มี content.
  &nbsp;&nbsp;&nbsp;&nbsp;ปัจจุบัน web crawler ที่ googlebot ใช้นั้นสามารถเข้าใจ javascript ได้แล้ว (ไม่แน่ใจว่าเข้าใจในระดับไหน) จึงทำให้ปัญหาการถูกมองว่าไม่มี content นั้นหมดไป (หากต้องการทดสอบว่ามันมองเห็นข้อมูลเป็นยังไง สามารถเข้าไปทดสอบได้ที่ https://support.google.com/webmasters/answer/6066468 ซึ่งมันจะให้เราเลือกโดเมนเว็บไซต์ของเรา แล้วมันจะทำการ fetch ข้อมูล จากนั้นก็จะแสดงผลหน้าเว็บออกมาเป็น snapshot ให้เราดู) แต่สำหรับเรื่องลำดับของเว็บไซต์นั้นก็อาจจะยังมีปัญหาอยู่ ตามความเข้าใจส่วนตัวคือ เนื่องจากลำดับมันขึ้นอยู่กับหลายปัจจัยและปัจจัยหนึ่งที่เกี่ยวข้องคือระยะเวลาตั้งแต่การเริ่มยิง request ไปเพื่อขอข้อมูลจนถึงการได้"ข้อมูลที่คาดหวัง"ทั้งหมดมา(ข้อมูลที่คาดหวังคือเป็นในรูปของ html code) ดังนั้นเว็บไซต์ที่ provide ข้อมูลมาให้ครบแล้วนั้นจึงมีระยะเวลาดังกล่าวน้อยกว่าเว็บไซต์ที่ provide สคริปต์ของ javascript แล้วให้ web crawler นำไป execute "ด้วยตัวมันเอง"แน่นอน   เมื่อระยะเวลาดังกล่าวมากจึงมีผลทำให้ลำดับของเว็บไซต์ต่ำนั่นเอง.
  &nbsp;&nbsp;&nbsp;&nbsp;การทำ server side rendering คือการทำให้ server นั้น execute javascript เมื่อมี request เข้ามาแล้ว provide เป็น html code ออกไป ดังนั้น web crawler จึงได้ข้อมูลที่คาดหวังทั้งหมดไปตั้งแต่แรก(ไม่ต้องไป execute เองแล้ว) ทำให้ระยะเวลาตั้งแต่การเริ่มยิง request จนถึงตอนที่ได้ข้อมูลที่คาดหวังนั้นสั้นลง ส่งผลให้ลำดับของเว็บไซต์สูงขึ้น นี่จึงเป็นสาเหตุที่เราควรจะทำ server side rendering.

  3. Explain the differences of `null` and `undefined`
  - ในเรื่องของความหมาย
   - `null` คือ ค่าว่าง(มีค่าเป็นค่าว่าง), `undefined` คือ ยังไม่กำหนดค่า
  - ในเรื่องของ type
    ```js
    - console.log(typeof null) //=> 'Object'
    - console.log(typeof undefined) //=> 'undefined'
    ```
  - ในเรื่องของ Operator
    ```js
    - console.log(null == undefined) //=> true
    - console.log(null === undefined) //=> false
    - console.log(!null) //=> true
    - console.log(!undefined) //=> true
    ```
  - ในเรื่องของ pointer และ memory ที่ใช้เก็บค่า (อันนี้ไม่ทราบครับ)

  4. Tell us the benefit of using ESLint.
  &nbsp;&nbsp;&nbsp;&nbsp;ผมขอแบ่ง standard ของ coding style หลักๆออกเป็น 3 ประเภทได้แก่ global standard, local standard และ my standard (คิดชื่อเองนะครับ)
  - global standard คือ มาตรฐานที่ซึ่งเป็นที่ยอมรับกันทั่วโลกสำหรับภาษาหรือ framework ต่างๆ
  - local standard คือ มาตรฐานที่ซึ่งเป็นที่ยอมรับของทีม
  - own standard คือ มาตรฐานที่ซึ่งเป็นที่ยอมรับของแต่ละคน
  &nbsp;&nbsp;&nbsp;&nbsp;ทีนี้สำหรับการพัฒนาโปรเจคร่วมกัน แน่นอนว่าถ้าไม่มีการกำหนด standard ขึ้นมานั้นจะทำให้ code ในโปรเจคมีความหลากหลายทางพันธุกรรมของ code เพราะมันเกิดจาก own standard 1 + own standard 3 + own standard 3 + ... ทำให้ยากต่อการอ่านและเรียนรู้นั่นเอง ดังนั้นจึงจำเป็นต้องกำหนด local standard ขึ้นมาเพื่อให้ coding style ของโปรเจคนั้นเป็นไปในทางเดียวกัน โดยควรจะล้อกับ global standard ด้วย
  &nbsp;&nbsp;&nbsp;&nbsp;หนึ่งในเครื่องมือที่ใช้ในการกำหนด standard (สำหรับ Javascript) นั่นคือ ESLint ซึ่งมันจะประกอบด้วย global standard อยู่แล้วและสามารถแก้ไขหรือเพิ่ม standard เข้าไปอีกได้ ซึ่งจะมีประโยชน์คือ
  - เวลาเราทำการเขียน code ด้วย editor ที่รองรับ ESLint (เช่น VScode ที่ลง ESLint extension เอาไว้) เวลาเราเขียน code ที่ผิด standard ที่ตั้งไว้ editor จะแจ้งเตือนเราทันทีว่าผิดอะไรและแนะนำสิ่งที่ถูกต้องให้
  - เราสามารถตั้งค่าเครื่องมือที่ใช้ทำ CI(Continuous Integration) ให้ทำการตรวจสอบ code กับ standard ที่ตั้งไว้ ซึ่งถ้ามันไม่ตรงตาม standard มันก็จะแจ้งเตือนให้เรารู้ (ยกตัวอย่างเช่น Circle-CI ถ้าเรารวมมันเข้ากับ GitHub และตั้งค่าให้มันใช้ eslint มันก็จะตรวจสอบ code จากไฟล์ .js ของเราว่ามีส่วนที่ผิดหรือไม่ตรงตาม standard รึปล่าว และมันจะแสดงผลผ่านเว็บไซต์ของ GitHub ซึ่งจะมีประโยชน์ในการทำ code review ภายในทีม)
