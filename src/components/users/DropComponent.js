
import React, { Component } from 'react';
import WrapperConsumer from '../../store';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

const customStyles = {
  control : (styles) =>{
      return {
          ...styles,
          border: 'none',
      };
  },
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      minHeight: "28px",
      margin : "2px 5px",
      width : "98%",
      lineHeight: '1.3em',
      backgroundColor: 
          isDisabled ? null : 
          isSelected ? "#ececec" : 
          isFocused ? "#fafafa" : null,
      color: "black",
      cursor: isDisabled ? 'not-allowed' : 'default',
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? "#fafafa" : "#fafafa"),
      },
    };
  },
  menu:(styles) => {
      return {
          ...styles,
          border : 'none',
          'marginTop' : "0px",
          'borderRadius': '3px',
          'backgroundColor': '#fff',
          'boxShadow': '1px 1px 30px 0 rgba(0, 0, 0, 0.1)',
          'z-index' : "9"
      };
  },
  multiValue: (styles, { data }) => {
       const color = data.isFixed ?  'white' : '#1e2026' 
       const tColor = data.isFixed ?  '#192642' : 'white' 
       var style = {
          ...styles,
          border: `1px solid ${tColor}`,
          background : color,
          minHeight: '26px',
          'marginRight': '5px',
          'borderRadius': '3px',
          color: tColor,
          cursor: 'pointer',
          marginLeft: '0px'
      }
      if(data.isFixed){
          style['backgroundImage'] = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAYAAACOqiAdAAABg2lDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz/GjxEjioWFxWvCakZ+1ISFMpNQkzRGGWxmnvmh5s283ptJk62ynaLExq8FfwFbZa0UkZKVhTWxQc95Ro1kzu3c87nfe8/p3nPBEU6rmlnTC1omZ4TG/cpcZF5xPlJHDU24GY6qpj46PR2kor3dUGXHK69dq/K5f61xKW6qUFUvPKLqRk54Qji4ktNt3hRuU1PRJeFjYY8hFxS+tvVYiZ9sTpb4w2YjHAqAo0VYSf7i2C9WU4YmLC+nU0vn1Z/72C9xxTOzMxLd4h2YhBjHj8IkYwTw0ceQzD689NMjKyrk937nT5GVXFVmnQIGyyRJkcMjal6qxyUmRI/LSFOw+/+3r2ZioL9U3eWH2gfLeukC5wZ8Fi3rfd+yPg+g+h7OMuX87B4MvopeLGudu9C8BifnZS22Bafr0H6nR43ot1Qt7kgk4PkImiLQegkNC6We/exzeAvhVfmqC9jegW4537z4BW/zZ+oMjDuqAAAACXBIWXMAAEJwAABCcAFu8l9tAAABt0lEQVR4nO3cMUoDQRiG4XeXECy19iIGPYUgW2wjbOsFbAURLaxst1xhwBPYeoF4B4+gGJNAbFLFDZt8uDNGvgdSzcD8vCyTbRIwM/u/stQDFGV1AozWzPIKPIemXsSdqtsg5eFFWY2Al45tZ8BThHG2kic+/2iDPaPepxCkDrfJVZH8OmmTOtzOcjiRw4kcTuRwIocTOZzI4UQOJ3I4kcOJHE7kcCKHEzmcyOFEDidyOJHDiRxO5HAihxM5nMjhRA4ncjiRw4kcTpQVZXUOXAP7Cc4fAMOOPXNgGmGWVQvgLjT1VdtiVpTVG3AYd6adMQEOQlNPVhdy0jxpu2Jv+fnBd5zI4UQOJ3I4UQ58pB7iD5sDX20LOXALfEYdZzfMgPvQ1K1tMoCirIZ0v4j24QK46djzAFxGmGXVLDR169MGyx+IhKaekuDtvCirTc6chaZ+732YLfnLQeRwIocTOZzI4UQOJ3I4kcOJHE7kcCKHEzmcyOFEDidyOJHDiRxO5HAihxM5nMjhRA4ncjiRw4kcTuRwIocTOZwodbjxL+2JLvkfdxZldQocr5llDDyGpp7Hncp68w0vRTl0eOWCYAAAAABJRU5ErkJggg==)'
          style['backgroundPosition'] = "95% 50%"
          style['backgroundSize'] = "13px"
          style['backgroundRepeat'] = "no-repeat"
          style['padding'] = '2px 18px 0px 10px'

      }
      return style
  },
  multiValueLabel: (styles, { data }) => {
      const tColor = data.isFixed ?  '#192642' : 'white' 
      return {
          ...styles,
          'marginRight': '5px',
          color: tColor,
          'fontSize': '13px',
          'lineHeight': '1.3em',
          'textAlign': 'center',
          cursor: 'pointer',
          };
  },
  multiValueRemove: (styles, { data }) => {
      const tColor = data.isFixed ?  '#192642' : 'white' 
      return data.isFixed ? { ...styles, display: 'none' } : {
      ...styles,
      color: tColor,
          background : 'white',
          ':hover': {
              backgroundColor: "white",
              color: '#575b63',
          },
      };
  },
  groupHeading: base => ({
      ...base,
      color: '#192642',
      fontSize: '14px',
      lineHeight: '1.3em',
      fontWeight: '700'
    }),
};
type State = { isOpen: boolean};

class DropComponent extends Component<*, State> {
  state = { isOpen: false};
  toggleOpen = (v) => {
    try{
      if(!v.target.classList.contains("removeItem"))
        this.setState(state => ({ isOpen: !state.isOpen }));
    }catch(e){
      this.setState(state => ({ isOpen: !state.isOpen }));
    }
  };
  onRemoveOption = v => {
    var value = this.props.value
    value = value.filter((val)=>{return val.value !== v.value})
    this.props.onRemove(value, this.props.name)
  };
  onBlur = v => {
    setTimeout(() => {
        this.setState(state => ({ isOpen: false }));
    }, 200)
  };
  onKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.setState(state => ({ isOpen: true }));
    }
  }
  render() {
    const { isOpen } = this.state;
    const { value, options, name, onChange, btnName } = this.props
    return (
      <Dropdown
        isOpen={isOpen}
        onClose={this.toggleOpen}
        onKeyPress={this.onKeyPress}
        target={this.props.single ?
          <>
          <div className={`lt-selectfield-1 ${this.props.error ? "warning" : ""}`} onClick={this.toggleOpen}>
              <div className="lt-selectfield-2">{value}</div>
          </div>
          <div className="it-dropicon-1" onClick={this.toggleOpen}></div>
          </>
          :
          <div className="aon-two-bottomitemmultiple-4" onClick={this.toggleOpen}>
            <div className="aon-two-bottomitemmultiple-8">
              <div className="aon-two-bottomitemmultiple-7" >{btnName}</div>
            </div>
            {value.map((v) => 
            <div key={`user-${name}-${v.value}`} className="aon-two-bottomitemmultiple-5">
              <div className="aon-two-bottomitemmultiple-6 drop-label">
                <span>{v.label}</span>
                <span className="removeItem" onClick={(e) => { this.onRemoveOption(v);}} style={{color : "transparent"}}></span>
              </div>
            </div>
            )}
          </div>
        }
      >
        {name === "skills" ?
          <CreatableSelect
            className="containerSelect"
            autoFocus
            backspaceRemovesValue={false}
            components={{ DropdownIndicator, IndicatorSeparator: null }}
            controlShouldRenderValue={false}
            hideSelectedOptions={false}
            isClearable={false}
            //menuIsOpen
            closeMenuOnSelect={false}
            isMulti
            styles={customStyles}
            value={value}
            onClose={this.toggleOpen}
            name={name}
            classNamePrefix="custom-drop"
            noOptionsMessage={() => ''}
            onBlur={this.onBlur}
            onChange={onChange}
            options={options}
            placeholder="Type and hit enter to add a skill"
          />
        :
          <Select
            className="containerSelect"
            autoFocus
            backspaceRemovesValue={false}
            components={{ DropdownIndicator, IndicatorSeparator: null }}
            controlShouldRenderValue={false}
            hideSelectedOptions={false}
            isClearable={false}
            menuIsOpen={this.props.single}
            closeMenuOnSelect={false}
            isMulti={!this.props.single}
            onBlur={this.onBlur}
            onChange={!this.props.single ? onChange : (v) => {onChange(v, this.props.name); this.toggleOpen()}}
            options={options}
            placeholder="Search and filter"
            styles={customStyles}
            classNamePrefix="custom-drop"
            tabSelectsValue={false}
            value={value}
            onClose={this.toggleOpen}
            name={name}
          />
        }
      </Dropdown>
    );
  }
}

// styled components
const Menu = props => {
  return (
    <div className="menuFunctions"
      style={{
        zIndex: 2,
      }}
      {...props}
    />
  );
};
const Blanket = props => (
  <div
    css={{
      bottom: 0,
      left: 0,
      top: 0,
      right: 0,
      position: 'fixed',
      zIndex: 1,
    }}
    {...props}
  />
);
const styleDropdown = {
   "position": 'relative',
}
const Dropdown = ({ children, isOpen, target, onClose, onKeyPress }) => (
  <div tabIndex="0" style={styleDropdown} className="dropFunctions outline-blue" onKeyPress={onKeyPress}>
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
    {isOpen ? <Blanket onClick={onClose} /> : null}
  </div>
);
const DropdownIndicator = props => {
    return (
      <div style={{ color: "transparent", height: 24, width: 32 }}>
        <span style={{cursor : "pointer"}} onTouchStart={(v) => {props.selectProps.onClose(v) }} onClick={ (v) => { props.selectProps.onClose(v) }} className="custom-indicatorContainer"></span>
      </div>
    );
}

export default WrapperConsumer(DropComponent);