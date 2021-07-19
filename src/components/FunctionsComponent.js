import React, {Fragment} from 'react'
import {Helmet} from "react-helmet";
import { NavLink } from 'react-router-dom'
import WrapperConsumer from '../store';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { getFunctions } from '../services/functions'
import { categoryIcon } from '../services/utils'

class FunctionsComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            functions : [],
            categories : [],
            search : ""
        }
        this.searchFunction = this.searchFunction.bind(this);
        this.categories = []
        this.catRef = []
    }

    componentDidMount(){
        this.getAllFunctions()

        var hash = window.location.hash;
        if(hash){
            const _this = this
            hash = hash.replace("#", "")
            setTimeout(function(){
                var i = _this.catRef.findIndex((r) => { 
                    return r.current.id === hash
                })
                i = (i !== -1) ? i : 0
                _this.catRef[i].current.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 200)
            
        }

    }

    searchFunction(e){
        var val = e.target.value.toLowerCase()
        let categories = this.allCategories
        this.allCategories.map((c) => {
            c.tbl_functions = this.state.functions.filter((f) => {
                return f.category === c.title
            })
            return true
        })
        if(val !== ""){
            categories = categories.filter((option) => {
                option.tbl_functions = option.tbl_functions.filter((f) => {
                    var t = f.function_title.toLowerCase()
                    return t.includes(val)
                })
                return option.tbl_functions.length > 0
            });
        }
        this.setState({ categories: categories })
    }

    getAllFunctions = async (e) => {
        var functions = await getFunctions() 
        if(functions && functions.categories){
            var filterFunctions = functions.categories
            filterFunctions = filterFunctions.map((option) => {
                const category = option.label[0].toUpperCase();
                return {
                category: /[0-9]/.test(category) ? '0-9' : category,
                ...option,
                };
            });
            var categories = functions.res_cat
            categories = categories.map((option) => {
                var icon = categoryIcon.find((f) => f.key === option.id)
                option.icon = icon.icon
                return option
            });
            for(var i = 0; i < categories.length; i++){
                this.catRef.push(React.createRef())
            }

            this.setState({ functions: filterFunctions, categories: categories})
            this.allCategories = categories
        }
    }

    renderIcon = (i) => {
        i++
        if(i < this.state.categories.length){
            var cat = this.state.categories[i].icon
            var id = cat; 
            id = id.split("."); 
            return id[0]
        }else{
            return ""
        }
    }

    render(){
        return(
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Functions</title>
                </Helmet>
                <Header />
                <div className="section-ale-1">
                    <div className="container-ale-1">
                    <div className="section-ale-2">
                        <div className="section-ale-4">
                        <h1 className="heading-ale-1">Functions</h1>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="aok-section-1">
                    <div className="aok-container-1">
                    <div className="aok-toparea-1">
                        <div className="aoh-headerwrapper-1">
                        <h2 className="aok-heading-1">Browse functions by category</h2>
                        <div className="aok-tagline-1">Work with the bests on the world’s largest hiring platform connecting oil and gas professionals and clients</div>
                        </div>
                        <div className="oak-searcharea-1">
                            <div action="/search" className="amj-searchblock-1-2 w-form">
                                <input type="search" id="search_function" name="search_function" maxLength="256" defaultValue={this.state.search} onChange={this.searchFunction}  required="" placeholder="Type and filter" className="aok-searchfield-1 w-input"/>
                                <input type="button" className="aok-searchicon-1 w-button"/>
                            </div>
                        </div>                    
                        <div className="aok-listwrapper-1">
                            <span ref={this.catRef[0]} id="DrillingRig3x"></span>
                        {this.state.categories.map((category, i) =>
                            <div className="aok-item-2" key={category.id.toString()}>
                                <div className="aok-itemtop-1"><img src={require('../assets/images/'+category.icon)} alt="" className="aok-icon-1"/>
                                    <h3 className="aok-itemname-1">{category.title}</h3>
                                </div>
                                <div className="aok-items-1">
                                    {category.tbl_functions.map((f) =>
                                        <NavLink to="#" className="aok-item-1" key={f.function_id.toString()}>{f.function_title}</NavLink>
                                    )}
                                </div>
                                <span ref={this.catRef[parseInt(i) + 1]} id={this.renderIcon(i)}></span>
                            </div>

                        )}
                        <div className="aok-bottom-1">
                            <div className="aok-bottom-2 w-richtext">
                            <p>Can&#x27;t find your function? <NavLink to="/suggest-function" target="_blank">Submit feedback</NavLink>.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="aoh-cta-1">
                    <div className="aoh-container-1">
                    <div className="aoh-box-1">
                        <div className="aoh-box-2">
                        <h2 className="aoh-headline-1">Join Our Growing Professionals Community<br/></h2>
                        </div>
                        <div className="aoh-box-3"><NavLink to="/create-account" className="aoh-button-1 w-button">Sign up as Service Provider</NavLink></div>
                    </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default WrapperConsumer(FunctionsComponent);