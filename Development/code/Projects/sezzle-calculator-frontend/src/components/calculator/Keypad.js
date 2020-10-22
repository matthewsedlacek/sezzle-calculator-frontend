import React from "react";

const Keypad = (props) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-light"
        name="("
        onClick={(e) => props.onClick(e.target.name)}
      >
        (
      </button>
      <button
        type="button"
        class="btn btn-light"
        name=")"
        onClick={(e) => props.onClick(e.target.name)}
      >
        )
      </button>
      <button
        type="button"
        class="btn btn-light"
        name="←"
        onClick={(e) => props.onClick(e.target.name)}
      >
        ←
      </button>
      <button
        type="button"
        class="btn btn-light"
        name="C"
        onClick={(e) => props.onClick(e.target.name)}
      >
        C
      </button>
      <br />

      <button
        type="button"
        class="btn btn-light"
        name="1"
        onClick={(e) => props.onClick(e.target.name)}
      >
        1
      </button>
      <button
        type="button"
        class="btn btn-light"
        name="2"
        onClick={(e) => props.onClick(e.target.name)}
      >
        2
      </button>
      <button
        type="button"
        class="btn btn-light"
        name="3"
        onClick={(e) => props.onClick(e.target.name)}
      >
        3
      </button>
      <button
        type="button"
        class="btn btn-light"
        name="+"
        onClick={(e) => props.onClick(e.target.name)}
      >
        +
      </button>
      <br />

      <button
        type="button"
        class="btn btn-light"
        name="4"
        onClick={(e) => props.onClick(e.target.name)}
      >
        4
      </button>
      <button
        type="button"
        class="btn btn-light"
        name="5"
        onClick={(e) => props.onClick(e.target.name)}
      >
        5
      </button>
      <button
        type="button"
        class="btn btn-light"
        name="6"
        onClick={(e) => props.onClick(e.target.name)}
      >
        6
      </button>
      <button
        type="button"
        class="btn btn-light"
        name="-"
        onClick={(e) => props.onClick(e.target.name)}
      >
        -
      </button>
      <br />

      <button
        type="button"
        class="btn btn-light"
        name="7"
        onClick={(e) => props.onClick(e.target.name)}
      >
        7
      </button>
      <button
        type="button"
        class="btn btn-light"
        name="8"
        onClick={(e) => props.onClick(e.target.name)}
      >
        8
      </button>
      <button
        type="button"
        class="btn btn-light"
        name="9"
        onClick={(e) => props.onClick(e.target.name)}
      >
        9
      </button>
      <button
        type="button"
        class="btn btn-light"
        name="*"
        onClick={(e) => props.onClick(e.target.name)}
      >
        x
      </button>
      <br />

      <button
        type="button"
        class="btn btn-light"
        name="."
        onClick={(e) => props.onClick(e.target.name)}
      >
        .
      </button>
      <button
        type="button"
        class="btn btn-light"
        name="0"
        onClick={(e) => props.onClick(e.target.name)}
      >
        0
      </button>
      <button
        type="button"
        class="btn btn-light"
        name="="
        onClick={(e) => props.onClick(e.target.name)}
      >
        =
      </button>
      <button
        type="button"
        class="btn btn-light"
        name="/"
        onClick={(e) => props.onClick(e.target.name)}
      >
        ÷
      </button>
      <br />
    </div>
  );
};

export default Keypad;
