import { useState } from "react";

export default function TextSwitcher() {
  // تعريف حالة النص الحالي
  const [text, setText] = useState("Hello, World!");

  // دالة لتبديل النص بين النص الأول والنص الثاني
  const switchText = () => {
    setText(text === "Hello, World!" ? "مرحباً بالعالم!" : "Hello, World!");
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={switchText}>تبديل النص</button>
    </div>
  );
}
