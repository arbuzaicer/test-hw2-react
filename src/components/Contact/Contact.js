import React from "react";
import "./Contact.css";
import ManOutlined from "@ant-design/icons/lib/icons/ManOutlined";
import WomanOutlined from "@ant-design/icons/lib/icons/WomanOutlined";
import QuestionOutlined from "@ant-design/icons/lib/icons/QuestionOutlined";

const Contact = ({ gender, firstName, lastName, phone }) => (
  <li className="contact-single">
    {gender === "male" && (
      <span className="man-icon">
        <ManOutlined />
      </span>
    )}
    {gender === "female" && <WomanOutlined />}
    {!gender && <QuestionOutlined />}
    <p>
      {firstName} {lastName}
    </p>
    <p>{phone}</p>
  </li>
);

export default Contact;
