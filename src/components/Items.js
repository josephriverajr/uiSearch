import React, { useEffect, useRef, useCallback } from "react";
import _ from "lodash";

const Item = ({ mapped, focus, index, setFocus, setShow, selected, setSelected, terms, setTerms,data,country,setCountry,language,setLanguage }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (focus) {
      ref.current.focus();
    }
  }, [focus]);

  const handleSelect = useCallback(() => {
    let value = {
      "name": mapped,
      "code": index
    }
    setFocus(index);
    setSelected(value);
    setTerms("");
    setShow(false);
    if(data==="language"){
      setLanguage(mapped);
    }
    else{
      setCountry(mapped);
    }
  }, [mapped, index, setFocus]);

  return (


    <li
      tabIndex={focus ? 0 : -1}
      role="button"
      ref={ref}
      onClick={handleSelect}
      onKeyPress={handleSelect}
      className={`${(mapped.toLowerCase()).includes(terms.toLowerCase()) ? "d-block" : "d-none"}  ${_.isEqual(mapped, selected.name) ? "bg-secondary text-white" : ""}`}
    >
      {mapped}
    </li>

  );
};

export default Item;