import { IconSearch } from "./Icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavInput = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchValue.length > 0) {
      const firstChar = searchValue.charAt(0);
      navigate(`/search/${firstChar}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-4/6 flex gap-2 bg-white text-black p-2 items-center rounded-md w-3/4 min-w-56 justify-between"
    >
      <input
        type="text"
        placeholder="Search recipe..."
        className="h-full bg-white placeholder-black w-full outline-none"
        value={searchValue}
        onChange={handleChange}
      />
      <button>
        <IconSearch />
      </button>
    </form>
  );
};

export default NavInput;
