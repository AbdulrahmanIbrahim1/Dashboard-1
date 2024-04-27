const renderIcon = () => {
  const toggleDarkMode = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);
    localStorage.setItem('Dark', JSON.stringify(newDarkMode));
  };

  return dark ? (
    <i className="fa-solid fa-moon" onClick={toggleDarkMode}></i>
  ) : (
    <i className="fa-regular fa-sun" onClick={toggleDarkMode}></i>
  );
};

return (
  <Navbar className={`tertiary justify-content-between MyTopBar ${dark ? "bg-dark text-white-50" : ""}`}>
    <i className={`fa-solid fa-list fs-2 ${display ? "ms-100" : ""}`} onClick={() => { setTrue(true) }} ></i>
    <Form >
      <InputGroup>
        <Form.Control
          placeholder="Search"
          aria-label="Search"
          className={dark ? "search-dark" : ""}
        />
      </InputGroup>
    </Form>
    <div className='icons'>
      {renderIcon()}
      <i className="fa-regular fa-bell"></i>
      <i className="fa-solid fa-gear"></i>
      <i className="fa-regular fa-user"></i>
    </div>
  </Navbar>
);
