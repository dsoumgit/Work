import React, { Component } from 'react';
import './Main.css';
import axios from 'axios';
import Card from './Card/card';
import Footer from './Footer/footer';

class Main extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            searchInput: '',
            bgColor: 'cornsilk'
        }
    }

    componentDidMount() {
        // json object
        const obj = [
            {
                id: 1,
                open: false,
                display: 'none',
                logo: 'https://res.cloudinary.com/djpzwzllb/image/upload/v1596227434/ThD1wW-W_s7yckh.jpg',
                company: "Reveal USA Inc.",
                description: "Reveal transforms SAP-centric supply chain-driven businesses to run better." 
                            + "Whether it’s optimizing supply chain performance or implementing additional" 
                            + "SAP functionality, our focus is helping organizations continually improve "
                            + "internal business processes, educate users and deploy the smart use of SAP "
                            + "to achieve value targets.",
                link1: "https://lhsustainext.netlify.app",
                link1_name: "Reveal oVo Sustainment",
                link2: "http://reporting.challenger.org/v2/",
                link2_name: "Challenger Learning Center"
            },
            {
                id: 2,
                open: false,
                display: 'none',
                logo: 'https://res.cloudinary.com/djpzwzllb/image/upload/v1596227581/Comcast_atykym.png',
                company: "Comcast Corp.",
                description: "Comcast NBCUniversal creates incredible technology and entertainment that "
                            + "connects millions of people to the moments and experiences that matter most. " 
                            + "With Xfinity, Comcast delivers the best in Internet, TV, voice, mobile, and "
                            + "home management, all working together to give customers instant access to the "
                            + "things that matter most – anywhere, anytime.",
                link1: "https://www.xfinity.com/learn/digital-cable-tv",
                link1_name: "Get what you need...",
                link2: "https://www.xfinity.com/corporate/legal/visitoragreement",
                link2_name: "Terms of Service",
                link3: "https://www.xfinity.com/learn/home-security",
                link3_name: "Home Security"
            },
            {
                id: 3,
                open: false,
                display: 'none',
                logo: 'https://res.cloudinary.com/djpzwzllb/image/upload/v1578338324/BlueCross_jt31fp.jpg',
                company: "Independence Blue Cross",
                description: "Independence Blue Cross (IBX) offers affordable health care, dental, "
                            + "vision and Medicare plans in Philadelphia and southeastern Pennsylvania. "
                            + "Independence Blue Cross is the leading health insurance company in southeastern "
                            + "Pennsylvania, and with our affiliates we serve more than 8 million people nationwide. "
                            + "For more than 80 years, we have worked to enhance the health and well-being of the people "
                            + "and communities we serve.",
                link1: "https://play.google.com/store/apps/details?id=com.ibx.ibxmobile&hl=en_US",
                link1_name: "IBX Mobile App"            
            },
            {
                id: 4,
                open: false,
                display: 'none',
                logo: 'https://res.cloudinary.com/djpzwzllb/image/upload/v1596228148/phmc_u03i9n.jpg',
                company: "Public Health Management Corp. (PHMC)",
                description: "Public Health Management Corporation (PHMC) is a nonprofit public health "
                            + "institute that builds healthier communities through partnerships with "
                            + "government, foundations, businesses and community-based organizations. "
                            + "It fulfills its mission to improve the health of the community by providing "
                            + "outreach, health promotion, education, research, planning, technical assistance, "
                            + "and direct services",
                link1: "https://lhsustainext.netlify.app",
                link1_name: "Reveal oVo Sustainment"            
            },
            {
                id: 5,
                open: false,
                display: 'none',
                logo: 'https://res.cloudinary.com/djpzwzllb/image/upload/v1596228610/jwvOKwgqQ8CnvnbgQoV98A_thumb_97b_nooaca.jpg',
                company: "Personal",
                description: "Contains all the work that I have done during my free time. " 
                            + "The projects can be anything from hobby, volunteer work, " 
                            + "or coursework.",
                link1: "https://daraportfolio.netlify.app/",
                link1_name: "My Personal Site",
                link2: "https://sitetrillo.netlify.app/",
                link2_name: "Trillo Landing Page",
                link3: "https://photopost.netlify.app/",
                link3_name: "Photo Post App"           
            },
            {
                id: 6,
                open: false,
                display: 'block',
                logo: 'https://res.cloudinary.com/djpzwzllb/image/upload/v1596228929/Others-logo_mwbm62.jpg',
                company: "Modules & Components",
                description: "List all the modules and components that are ready for integrating " 
                            + "in the page or use it in React.",
                link1: "https://fourcards.netlify.app/",
                link1_name: "Four Cards",
                link2: "https://signupform001.netlify.app/",
                link2_name: "Sign Up Form"            
            }
        ];
        
        this.setState({
            data: obj
        });

        // axios.get("https://jsonplaceholder.typicode.com/users")
        //     .then(response => {
        //         console.log(response);
        //         this.setState({
        //             data: response.data
        //         });
        //     })
    }

    onTitleFocus = evt => {
        this.setState({
            bgColor: 'white'
        });
    }

    onFocusOut = () => {
        this.setState({
            bgColor: 'cornsilk'
        })
    }

    onSearchChange = evt => {
        this.setState({
            searchInput: evt.target.value
        })
    }

    render() {
        
        // destructing 
        const { data, searchInput } = this.state;
        // search based on name
        const filteredItem = data.filter(item => {
            return item.company.toLowerCase().includes(searchInput.toLowerCase());
        });

        return (
            <div className="container">
                <main className="main">
                    <h1 className="display-1">Work Portfolio</h1>
                    <div className="searchbox">
                        <input type="text" 
                            placeholder="search name..." 
                            onFocus={this.onTitleFocus} 
                            onBlur={this.onFocusOut} 
                            onChange={this.onSearchChange} 
                            style={{background: this.state.bgColor}} />
                    </div>
                     <Card data={filteredItem} /> 
                </main>
                <Footer />
            </div>
        )
    }

}



export default Main;