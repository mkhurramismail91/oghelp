import React, { Component, } from 'react'
import { NavLink } from 'react-router-dom'
import WrapperConsumer from '../../store';
import Select  from 'react-select'
import { getAllCategories } from '../../services/functions'


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


  const orderOptions = values => {
    return values.filter(v => v.isFixed).concat(values.filter(v => !v.isFixed));
  };

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user : {},
            zones : [],
            picture : "",
            functions : [],
            userFunctions : [{value : 0, label: "Add a function", isFixed : true}],
            isOpen: false, 
            value: []
        }

        this.onChangeFunction = this.onChangeFunction.bind(this)
    }
    componentDidMount(){
        this.getAllFunctions()
    }

    getAllFunctions = async (e) => {
        var functions = await getAllCategories() 
        var allFunctions = []
        if(functions){
            functions = functions.map((option) => {
                option.tbl_functions = option.tbl_functions.map((op) => {
                    op.value = op.function_id
                    op.category = option.id
                    op.label = op.function_title
                    allFunctions.push(op)
                    return op
                })
                option.options = option.tbl_functions
                option.label = option.title
                return option
            });
            this.categories = {functions, allFunctions}
            this.setState({ functions: functions })
        }
    }

    async onChangeFunction(value, { action, removedValue, name }) {
        var initValues = [{value : "", label: "Add a function", isFixed : true}]

        switch (action) {
          case 'remove-value':
          case 'pop-value':
            if (removedValue.isFixed) {
              return;
            }
            break;
          case 'clear':
            value = initValues
            break;
        default :
            break 
        }

        value = orderOptions(value);
        this.props.onChange(value)
    }

    /**NEW */
    toggleOpen = () => {
        this.setState(state => ({ isOpen: !state.isOpen }));
    };
    onSelectChange = value => {
        this.setState({ value });
        if(value.length === 0)
        this.toggleOpen();
        this.props.onChange(value)
    };
    onRemoveOption = v => {
        var value = this.props.functionValue
        value = value.filter((val)=>{return val.value !== v.value})
        this.props.onChange(value)
    };
    onBlur = value => {
        setTimeout(() => {
            this.setState(state => ({ isOpen: false }));
        }, 200)
    };
    /** NEW */

    render() {
        const {context:{user}} = this.props;
        const { isOpen } = this.state;
        return (
            <div className="aon-areaone-1">
                <div className={`aon-one-profilebox-1 ${!this.props.modeSave ? "alt" : ""}`}>
                {user.complete ? 
                    <>
                    <div className="aon-one-profilestatus-1">
                        <div className="aon-profilestatusbar-1 complete"></div>
                    </div>
                    <div className="aon-one-profilehead-1">
                        <div className="aon-one-profileheadtext-3">Profile complete!</div>
                    </div>
                    </>
                :
                    <>
                    <div className="aon-one-profilestatus-1">
                        <div className="aon-profilestatusbar-1" style={{width : user.porcentage+"%"}}></div>
                    </div>
                    <div className="aon-one-profilehead-1">
                        <div className="aon-one-profileheadtext-2">Profile: {user.porcentage}%</div>
                        <div className="aon-one-profileheadtext-1">Complete your profile!</div>
                    </div>
                    </>
                }
                <div className="aon-one-profilesummary-1">
                    <div className="aon-one-profilesummary-2">
                    <div className="aon-one-profilesummary-3">
                        <div className="aon-one-profilesummarypic-1" style={(user.profile_file) ? {'backgroundImage' : 'url('+user.profile_file+')'} : {}}></div>
                    </div>
                    <div className="aon-one-profilesummary-4">
                        <div className="aon-one-profilesummarytext-1 text-break-all">{user.full_name}</div>
                        {user.state && user.city &&
                        <div className="aon-one-profilesummarytext-2 text-break-all">{user.state+", "+ user.city}</div>
                        }
                    </div>
                    </div>
                </div>
                {user.about_me && user.about_me !== "" &&
                <div className="aon-one-profileitem-1">
                    <div className="aon-one-profileitemhead-1">Description</div>
                    <div className="aon-one-profileitemtext-1 text-break">{user.about_me}</div>
                </div>
                }
                {((user.functions.length > 0 && this.props.modeView) || this.props.modeSave) &&
                <div className="aon-one-profileitem-1">
                    <div className="aon-one-profileitemhead-1">Functions</div>
                    {this.props.modeView &&
                        <div className="aon-one-profileitemfunctionsview-1">
                        <div className="aon-one-functionswrapper-2">
                        {user.functions.map((f) =>
                            <div key={`fun-${f.function_id}`} className="aon-one-function-1">
                                <div className="aon-one-function-2">{f.tbl_function.title_function}</div>
                            </div>
                        )}
                        </div>
                        </div>
                    }
                    {this.props.modeSave &&
                    <div className="aon-one-profileitemfunctionsedit-1">
                    <div className="aon-one-functioneditwrapper-1">
                        <div className="aon-one-functioneditwrapper-2 user">
                        <Dropdown
                            isOpen={isOpen}
                            onClose={this.toggleOpen}
                            target={
                            <div className="aon-one-functioneditwrapper-2">
                                <div className="aon-one-functioneditbutton-1">
                                <div className="aon-one-functioneditbutton-2" onClick={this.toggleOpen}>Add a function</div>
                                </div>
                                {this.props.functionValue.map((v) => 
                                <div key={`user-func-${v.value}`} className="aon-one-functionedittag-1">
                                <div className="aon-one-functionedittag-2 d-flex align-items-center">
                                    <span>{v.label}</span>
                                    <span style={{cursor : "pointer"}} onClick={() => this.onRemoveOption(v)}></span>
                                </div>
                                </div>
                                )}
                            </div>
                            }
                        >
                            <Select
                                className="containerSelect"
                                autoFocus
                                backspaceRemovesValue={false}
                                components={{ DropdownIndicator, IndicatorSeparator: null }}
                                controlShouldRenderValue={false}
                                hideSelectedOptions={false}
                                isClearable={false}
                                menuIsOpen
                                isMulti
                                onBlur={this.onBlur}
                                onChange={this.onSelectChange}
                                options={this.state.functions}
                                placeholder="Type and Filter"
                                styles={customStyles}
                                tabSelectsValue={false}
                                value={this.props.functionValue}
                                onClose={this.toggleOpen}
                                />
                        </Dropdown>
                        </div>
                    </div>
                    </div>
                    }
                </div>
                }
                {user.linked_in && user.linked_in !== "" &&
                <div className="aon-one-profileitem-1 linked">
                <div className="aon-one-profileitemhead-1">LinkedIn</div><a href={user.linked_in} target="_blank" rel="noopener noreferrer"  className="aon-one-profileitemlink-1 text-break">{user.linked_in}</a></div>
                }
                {(this.props.modeSave && this.props.sendingForm) &&
                <div className="aon-one-profilebutton-1">
                    <button type="button" onClick={this.props.onWait} className="aon-one-savebutton-1 w-button">Save updates</button>
                </div>
                }
                {(this.props.modeSave && !this.props.sendingForm) &&
                <div className="aon-one-profilebutton-1">
                    <button type="button" onClick={this.props.onSubmit} className="aon-one-savebutton-1 w-button">Save updates</button>
                </div>
                }
                {this.props.modeView &&
                <div className="aon-one-profilebutton-1">
                    <NavLink to="/profile-edit" className="aon-one-editbutton-1 w-button">Edit my profile</NavLink>
                </div>
                }
                </div>
                {!user.complete && !this.props.modeSave  && !this.props.modeView &&
                <div className="aon-one-profilebutton-12">
                <NavLink to="/profile-edit" className="aon-one-editbutton-2 w-inline-block">
                    <div className="aon-one-editbutton-3">Complete your profile</div>
                </NavLink>
                </div>
                }
                {user.complete && !this.props.modeSave  && !this.props.modeView &&
                <div className="aon-one-profilebutton-12">
                    <NavLink to="/profile-view" className="aon-one-editbutton-2 w-inline-block">
                    <div className="aon-one-editbutton-3">View my profile</div>
                    </NavLink>
                </div>
                }
            </div>
        );
    }
}


const Menu = props => {
    return (
      <div className="menuFunctions"
        style={{
          zIndex: 7,
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
  const Dropdown = ({ children, isOpen, target, onClose }) => (
    <div style={styleDropdown} className="dropFunctions">
      {target}
      {isOpen ? <Menu>{children}</Menu> : null}
      {isOpen ? <Blanket onClick={onClose} /> : null}
    </div>
  );
  const DropdownIndicator = props => {
      return (
        <div style={{ color: "transparent", height: 24, width: 32 }}>
          <span style={{cursor : "pointer"}} onTouchStart={() => {props.selectProps.onClose() }} onClick={ () => {props.selectProps.onClose() }} className="custom-indicatorContainer"></span>
        </div>
      );
  }

export default WrapperConsumer(User);