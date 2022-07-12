import React, { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Heading from "./Heading";
import Input from "./Input";
import Radio from "./Radio";
import Subheading from "./Subheading";

export default function CardForm({ bgColor, handleSubmit }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [favcolor, setFavcolor] = useState("");
  const [age, setAge] = useState("");
  const [notif, setNotif] = useState(false);
  const [gender, setGender] = useState(null);
  const [isReset, setIsReset] = useState(false);
  const [ready, setReady] = useState(false);
  if (name && surname && email && favcolor && age && gender) {
    setTimeout(() => {
      setReady(true);
    }, 500);
  }

  return (
    <div className="card-wrapper c-form">
      <div className="card card-form" style={{ backgroundColor: bgColor }}>
        <div className="card-container">
          <Subheading value="Form card subheader" />
          <form id="form">
            <Input
              active={true}
              type="text"
              label="Name"
              placeholder="name"
              data={name}
              id="name"
              name="name"
              handleInput={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              active={true}
              type="text"
              label="Surname"
              placeholder="Surname"
              data={surname}
              id="surname"
              name="surname"
              handleInput={(e) => {
                setSurname(e.target.value);
              }}
            />
            <Input
              active={true}
              type="text"
              label="Favorite color"
              placeholder="Favorite color"
              data={favcolor}
              id="favcolor"
              name="favcolor"
              handleInput={(e) => {
                setFavcolor(e.target.value);
              }}
            />
            <Input
              active={true}
              type="email"
              label="Email"
              placeholder="Email address"
              data={email}
              id="email"
              name="email"
              handleInput={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              active={true}
              type="number"
              label="Age"
              placeholder="Age"
              data={age}
              id="age"
              name="age"
              handleInput={(e) => {
                setAge(e.target.value);
              }}
            />
            <Radio
              value="Male"
              handleRadio={(e) => {
                setGender(e.target.value);
              }}
            />
            <Radio
              value="Female"
              handleRadio={(e) => {
                setGender(e.target.value);
              }}
            />

            <Checkbox
              active={true}
              value="Subscribe for notifications"
              checked={notif}
              handleCheckBox={() => {
                setNotif(!notif);
              }}
            />
            <div className="buttons-wrapper">
              <Button
                active={ready}
                padding="15px 32px"
                btnBgColor="#7FFFD4"
                textColor="white"
                value="Submit"
                handleClick={(e) => {
                  handleSubmit({
                    name: name,
                    surname: surname,
                    favcolor: favcolor,
                    email: email,
                    age: age,
                    gender: gender,
                    notif: notif,
                  });
                  setAge("");
                  setEmail("");
                  setFavcolor("");
                  setName("");
                  setGender("");
                  setSurname("");
                  setIsReset(true);
                  setNotif(false);
                  setReady(false);
                }}
              />
              <Button
                active={true}
                padding="15px 32px"
                btnBgColor="#A53232"
                textColor="white"
                value="Cancel"
                handleClick={() => {
                  setAge("");
                  setEmail("");
                  setFavcolor("");
                  setName("");
                  setSurname("");
                  setGender("");
                  setNotif(false);
                  setIsReset(true);
                  setReady(false);
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
