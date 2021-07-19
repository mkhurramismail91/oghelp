import React, {Fragment} from 'react'
import {Helmet} from "react-helmet";
import { NavLink } from 'react-router-dom'
import WrapperConsumer from '../store';
import '../assets/css/normalize.css';
import '../assets/css/components.css';
import '../assets/css/oghelp.css';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class PrivacyComponent extends React.Component{

    render(){

        return(
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Privacy</title>
                </Helmet>
                <Header />
                <div className="section-ale-0">
                    <div className="section-ale-1">
                    <div className="container-ale-1">
                        <div className="section-ale-2">
                        <div className="section-ale-4">
                            <h2 className="heading-ale-1">Privacy Policy</h2>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="doc-ale-1">
                    <div className="doc-ale-3">
                        <div className="doc-ale-4">
                        <div className="doc-ale-10">
                            <div className="doc-ale-12">
                            <div className="doc-ale-13">
                                <div className="section-ale-8">
                                <div className="text-ale-3">Business</div>
                                </div>
                                <div className="section-ale-7">
                                <div className="doc-ale-14">
                                    <NavLink to="/about" className="link-ale-3 w-inline-block">
                                    <div className="text-ale-2">About</div>
                                    </NavLink>
                                </div>
                                <div className="doc-ale-14">
                                    <NavLink to="/jobs" className="link-ale-3 w-inline-block">
                                    <div className="text-ale-2">Jobs</div>
                                    </NavLink>
                                </div>
                                <div className="doc-ale-14">
                                    <NavLink to="/contact" className="link-ale-3 w-inline-block">
                                    <div className="text-ale-2">Contact</div>
                                    </NavLink>
                                </div>
                                </div>
                            </div>
                            <div className="doc-ale-13">
                                <div className="section-ale-8">
                                <div className="text-ale-3">Legal</div>
                                </div>
                                <div className="section-ale-7">
                                <div className="doc-ale-14">
                                    <NavLink to="/privacy" aria-current="page" className="link-ale-3 w-inline-block w--current">
                                    <div className="text-ale-2">Privacy</div>
                                    </NavLink>
                                </div>
                                <div className="doc-ale-14">
                                    <NavLink to="/terms-of-service" className="link-ale-3 w-inline-block">
                                    <div className="text-ale-2">Terms of Service</div>
                                    </NavLink>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="doc-ale-11">
                            <div className="doc-ale-17">
                            <div className="doc-ale-20">
                                <div className="rich-text-ale-2 w-richtext">
                                <h2>Privacy<strong> Policy</strong></h2>
                                <p><strong>OGHELP’s Privacy Policy Last update: June 7 2020</strong></p>
                                <p><strong> </strong>OGHELP Global Inc. (“<strong>OGHELP</strong>”) provides this Privacy Policy to let you know our policies and procedures regarding the collection, use and disclosure of information through <a href="http://www.oghelp.com/">www.oghelp.com</a> (the “<strong>Site</strong>”), and any other websites, features, applications, widgets or online services that are owned or controlled by OGHELP and that post a link to this Privacy Policy (together with the Site, the “<strong>Service</strong>”), as well as any information OGHELP collects offline in connection with the Service. It also describes the choices available to you regarding the use of, your access to, and how to update and correct your personal information<em>.</em> This Privacy Policy incorporates by reference the OGHELP Terms of Service Agreement .</p>
                                <p> Please read this privacy policy (the <strong>“Policy”</strong>) carefully to understand how we use your personal information. If you do not agree with this Policy, your choice is not to use <a href="http://oghelp.com/">oghelp.com</a> (the <strong>“Site”</strong>). By accessing or using this Site, you agree to this Policy. This Policy may change from time to time; any changes we make to this Policy will be posted on this Site, we may also take any other steps, to the extent required by applicable law, including notifying you and/or seeking your explicit consent to material changes. Changes to this Policy are effective as of the stated &quot;Last Updated&quot; date. Other than where we have sought such explicit consent from you, your continued use of the Site after we make changes will constitute acceptance of, and agreement to be bound by, those changes, so please check the Policy periodically for any updates or changes.</p>
                                <p> At OGHELP we care about your privacy. In using this Site</p>
                                <p><li>         We do not sell or rent your personal information to third parties for their direct marketing purposes without your explicit consent.</li></p>
                                <p><li>         We do not disclose it to others except as disclosed in this Policy or required to provide you with the services of the Site and mobile applications and its related sites, applications, services and goods (collectively, the “<strong>Site</strong>”), meaning - to allow you to buy, sell, share the information you want to share on the Site; to contribute on the forum; pay for products; post reviews and so on; or where we have a legal obligation to do so.</li></p>
                                <p><li>         We collect information that you provide us or voluntarily share with other users, and also some general technical information that may automatically be gathered by our systems, such as IP address, browser information and cookies to enable you to have a better user experience and a more personalized browsing experience.</li></p>
                                <p><li>         We will not share information that you provide us in the process of the registration - including your contact information - except as described in this Policy.</li></p>
                                <p> As part of using OGHELP, the Information that you choose to publish on the Site (photos, videos, text, music, reviews, deliveries) - is no longer private, just like any information you publish online.</p>
                                <p>Technical information that is gathered by our systems, or third party systems, automatically may be used for Site operation, optimization, analytics, content promotion and enhancement of user experience.</p>
                                <p> In accordance with applicable local law, we may use your information to contact you - to provide notices related to your activities, or offer you promotions and general updates, but we will not let any other person, including sellers and buyers, contact you, other than through your user profile on the Site.</p>
                                <p>Your personal information may be stored in systems based around the world, and may be processed by third party service providers acting on our behalf. These providers may be based in countries that do not provide an equivalent level of protection for privacy as that enjoyed in the country in which you live. In that case, we will provide for adequate safeguards to protect your personal information.</p>
                                <p>You can exercise your rights over your personal information, by contacting <NavLink to="/contact">support@oghelp.com</NavLink>. If you do not have an active OGHELP account, please contact us at <NavLink to="/contact">support@oghelp.com</NavLink>.</p>
                                <p> OGHELP (including all OGHELP and its affiliates) respects your privacy and is committed to protect the personal information of its users - buyers, sellers, collaborators, clients, service providers and other visitors browsing the Site (<strong>“Users”</strong>) as well as affiliates, influencers and other collaborators interacting with OGHELP. We believe that you have a right to know our practices regarding the information we collect when you visit and/or use the Site. This Policy explains our privacy practices for the Site and services provided by OGHELP as well as privacy practices that apply to affiliates, influencers and other collaborators who maybe individuals or affiliated businesses. By accessing and/or using the Site and its related sites, applications, services, goods and/or registering for a OGHELP account and/or using it as a collaborator to share comments on a specific project or Job and/or registering to our affiliate or influencer or similar programs, you agree to the terms and conditions of this Policy, including to our collection, use, disclosure, processing and retention of your personal information. You can also learn how to limit sharing of information in this Policy.</p>
                                <p> <strong>Information We Collect</strong></p>
                                <p><strong> </strong>When you register to the Site, we ask you to provide certain personal information about you, including a valid email address, facebook, linkedIn or google account log in details and username. We may ask you to provide or otherwise collect additional information that you provide us, such as, your profile details, physical address, telephone number, pictures and images, business affiliation or other contact details such as, financial information (such as payment method and credit card number) for the purpose of conducting transactions, details about other social networks linked accounts, details about your listed  jobs, purchases, education, profession and expertise, and additional authentication information (such as your government issued ID, passport, or driving license, as permitted by applicable laws and as detailed in our Help Center at <a href="https://sellers.fiverr.com/en/article/verifying-your-identity">“Verifying Your Identity”</a>. We also collect information about your communications with OGHELP as well as communication with other users of OGHELP. The information we collect may include</p>
                                <p><li>         <strong>Personal Information:</strong> In the course of using the OGHELP Service (whether as a Client or Service Provider or Agency or Business entity), we may require or otherwise collect information that identifies you as a specific individual and can be used to contact or identify you (“<strong>Personal Information</strong>”). Examples of Personal Information include your name, email address, company address, billing address, and phone number.</li></p>
                                <p><li>         <strong>Payment Information:</strong> If you use the OGHELP Service to make or receive payments, we will also collect certain payment information, such as credit card or other financial account information, and billing address.</li></p>
                                <p><li>         <strong>Identity Verification:</strong> We may collect Personal Information, such as your date of birth or taxpayer identification number, to validate your identity or as may be required by law, such as to complete tax filings. We may request documents to verify this information, such as a copy of your government-issued identification or photo or a billing statement.</li></p>
                                <p><li>         <strong>Non-Identifying Information/Usernames:</strong> We also may collect other information, such as zip codes, demographic data, information regarding your use of the OGHELP Service, and general project-related or Job-related data (“<strong>Non-Identifying Information</strong>”). We may aggregate information collected from OGHELP registered and non-registered users (“<strong>Users</strong>”). In some cases, we may render Personal Information (generally, email address) into a form of Non-Identifying Information referred to in this Privacy Policy as “<strong>Hashed Information</strong>.” This is typically accomplished using a mathematical process (commonly known as a hash function) to convert information into a code. The code does not identify you directly, but it may be used to connect your activity and interests.</li></p>
                                <p><li>         <strong>Combination of Personal and Non-Identifying Information:</strong> Certain Non-Identifying Information would be considered a part of your Personal Information if it were combined with other identifiers in a way that enables you to be identified (for example, combining information with your name). But the same pieces of information are considered Non-Identifying Information when they are taken alone or combined only with other non-identifying information (for example, your viewing preferences). We may combine your Personal Information with Non-Identifying Information, but OGHelp will treat the combined information as Personal Information.</li></p>
                                <p><li>         <strong>Collection of Third Party Personal Information:</strong> We collect the following personal information from you about your contacts or friends: First name, last name, and email address when you provide it to us for the purpose of adding your contacts to a message room.</li></p>
                                <p> In addition, we collect information while you access, browse, view or otherwise use the Site. In other words, when you access the Site we are aware of your usage of the Site, and gather, collect and record the information relating to such usage, including geo-location information, IP address, device and connection information, browser information and web-log information, and all communications recorded by Users through the Site. We use that information to enhance user experience, personalize your browsing experience as well as monitor the Site for preventing fraud and inappropriate content or behavior. We also collect supplemental information obtained from third parties such as demographic and navigation data, if applicable.</p>
                                <p> Additionally, in order to improve your online experience at OGHELP, we have implemented impression reporting. While you view our ads, we gather user Global Unique Identifier, HTTP request data like, user agent, IP, host, url, country/continent from which request made, browser info, device/operating system/operating system version.</p>
                                <p> Once you register, your username and additional information regarding your activity is made public and is visible to all Users of the Site. This information includes photos you upload, your published portfolio, job information, ratings, and additional information you may choose to add to your profile.</p>
                                <p><strong>Feedback</strong></p>
                                <p>We collect feedback from OGHELP Users about their experience with other OGHELP Users of our Service. Please note that any feedback you provide via the OGHELP Service or feedback provided about you is publicly viewable via the Service. On very rare occasions, we may remove feedback pursuant to the relevant provisions of our Terms of Service, including the <a href="https://www.upwork.com/legal#terms-of-use">Terms of </a>Service</p>
                                <p> <strong>How do we collect Information?</strong></p>
                                <p><strong> </strong>You directly provide us with most of the information we collect. You do this by filling out the registration details on the Site, linking to your OGHELP account accounts of other social networks (please also see the External Links section below), completing application forms, skill tests and skill matrix and customer surveys (if any) as well as by posting and sharing additional information voluntarily. This can include information about service providers and clients and their Jobs, User&#x27;s location, education and profession, sharing of portfolio, ratings and feedbacks by service providers and clients and anything you choose to add to your user profile.</p>
                                <p> We also collect technical information indirectly and automatically through our systems. This information includes logging your Internet Protocol (IP) address, software configuration, operating system and use of cookies (cookies are small files sent from us to your computer and sometimes back). Cookies ultimately help us improve your navigation and ease of use of our Site. You can find further information about Cookies in this Policy below, under &quot;Cookies&quot;.</p>
                                <p> We also collect information from third party vendors and/or partners and/or other commercially available sources such as data aggregators and public databases, who provide us data to supplement the information we collect about you, in accordance with applicable laws. For example, we may receive fraud warnings from service providers for our fraud prevention and risk assessment efforts.</p>
                                <p>If you link, connect, or login to your OGHELP Account with a third-party service (e.g. Google, Facebook, LinkedIn), we receive certain information, such as your registration and profile information from that service. This information varies and is controlled by that service or as authorized by you via your privacy settings at that service.</p>
                                <p> We also receive certain information about you, if you are invited to OGHELP by another user (for example, as part of our collaboration tools and referral program), in such case we will receive limited information, such as your email address or other contact information, and we will use it for the same purpose it was provided and in accordance with the terms of this Privacy Policy.  </p>
                                <p> <strong>Do Not Track</strong></p>
                                <p>Do Not Track (DNT) is a privacy preference that users can set in some web browsers, allowing users to opt out of tracking by websites and online services. We do not honor browser requests not to be tracked online (known as “Do Not Track”), but our cookie policy below describes how you can opt out of receiving cookies. </p>
                                <p> <strong>How do we use the Information collected?</strong></p>
                                <p><strong> </strong>Where relevant under applicable laws, all processing of your personal information will be justified by a &quot;condition&quot; for processing. In the majority of cases, processing will be justified on the basis that:</p>
                                <ul role="listitem">
                                    <li>you have provided your consent for us to use your personal information for a specific purpose;</li>
                                    <li>our use of your personal information is necessary to perform a contract or take steps to enter into a contract with you (e.g. to provide you with services which you have agreed to purchase);</li>
                                    <li>the processing is necessary to comply with a relevant legal obligation or regulatory obligation that we have (e.g. fraud prevention); or</li>
                                    <li>the processing is necessary to support our legitimate interests as a business (e.g. to improve our services to you), subject to your interests and fundamental rights and provided it is conducted at all times in a way that is proportionate.</li>
                                </ul>
                                <p><li>        We will use your personal information for the following purposes:</li></p>
                                <ul role="listitem">
                                    <li>to provide you with quality service and security, to operate the Site and to perform our obligations to you. For example, we use the information collected from you to verify your identity. We also use this information to establish and set up your account, verify or re-issue a password, log your activity, enable your communications with other members, provide customer support and contact you from time to time. The information helps us develop and improve our services to you and customize and personalize your experience (including by making Job or Service Provider suggestions, ranking search results, etc.).</li>
                                    <li>to ensure marketplace integrity, prevent fraud and maintain a safe and secure marketplace. For example, we use your information to track and prevent fraudulent activities and other inappropriate activities and, monitor content integrity, conduct security investigations and risk assessments, verify or authenticate information provided by you, enforce our Terms of Service and comply with applicable laws. We conduct certain behavioral analytics to achieve the above objectives and in limited cases, if we detect activity that we think poses a risk to the OGHELP marketplace, other users, our community, or third parties, automated processes may restrict or limit your ability to use OGHELP. If you would like to challenge any such decision, please contact us at <a href={"mailto:support@oghelp.com"} target="_top" rel="noopener noreferrer">support@oghelp.com</a>.</li>
                                    <li>to promote and advertise the OGHELP Site and marketplace. For example, we use the information collected from you for the purpose of sending direct marketing messages (as detailed below), to show you information that may be of interest to you, to organize and facilitate referral programs, contests or other promotional activities or events.</li>
                                    <li>to maintain appropriate business records, to comply with lawful requests by public authorities and to comply with applicable laws and regulations or as otherwise required by law.</li>
                                </ul>
                                <p> We will ask for your consent before using information for a purpose other than those set out in this Policy.</p>
                                <p><strong>Direct marketing:</strong></p>
                                <p><li>         We use your personal information to send you direct marketing communications about our products, services or promotions from OGHELP that may be of interest to you or our related services. This may be via email, post, SMS, telephone or targeted online advertisements.</li></p>
                                <p><li>         In most cases our processing of your personal information for marketing purposes is based on our legitimate interest, although some cases (such as where required by law) will be based on your consent. You have a right to prevent direct marketing of any form at any time - this can be exercised by following the opt-out link attached to each communication or by sending an email to <a href={"mailto:support@oghelp.com"} target="_top" rel="noopener noreferrer">support@oghelp.com</a>.</li></p>
                                <p><li>         We take steps to limit direct marketing to a reasonable and proportionate level, and to send you communications which we believe may be of interest or relevance to you, based on the information we have about you.</li></p>
                                <p> <strong>How long do we keep your information?</strong></p>
                                <p><strong> </strong>We apply a general rule of keeping personal information only for as long as is required to fulfil the purpose for which it was collected. However, in some circumstances we may retain your personal information for longer periods of time. We may retain your information for the following purposes:</p>
                                <p>§  as long as it is necessary and relevant for our operations, e.g. so that we have an accurate record of your dealings with us in the event of any complaints or challenge; and</p>
                                <p>§  in relation to personal information from closed accounts to comply with applicable laws, prevent fraud, collect any fees owed, resolve disputes, troubleshoot problems, assist with any investigation, enforce our Site terms and take other actions as permitted by law.</p>
                                <p> <strong>Children Under the Age of 18</strong></p>
                                <p><strong> </strong>Our Site is not intended for children under 18 years of age. No one under age 18 should provide any personal information to or on the Site. We do not knowingly collect personal information from children under 18. Parents and guardians should at all times supervise their children&#x27;s activities. If we learn we have collected or received personal information from a child under 18, we will delete that personal information. If you believe we might have any information from or about a child under 18, please contact us at <a href={"mailto:legal@oghelp.com"} target="_top" rel="noopener noreferrer">legal@oghelp.com</a>.</p>
                                <p> <strong>Sharing Personal Information with Third Parties</strong></p>
                                <p>We do not sell, rent or share your personal information with third parties for their marketing purposes without your explicit consent.</p>
                                <p> We combine your personal information with information we collect automatically or obtain from other companies and use it to improve and personalize our services, content and advertising and/or to prevent fraud.</p>
                                <p> our services to you, fulfil obligations imposed on us by applicable laws and regulations, and prevent fraud and illegal activities, as detailed below:</p>
                                <p>§  We share your information with service providers that provide us with services for the purpose of operating the Site, opening and operating your account as well as providing ancillary services (example - payment vendors, CRM systems, forum hosting, community management services, IT SaaS services, mailing systems or technical consultants). Our contracts with these service providers do not permit use of your information for their own (marketing) purposes. Consistent with applicable legal requirements, we take commercially reasonable steps to require third parties to adequately safeguard your personal information and only process it in accordance with our instructions;</p>
                                <p>§  We will share your information to law enforcement agencies, public authorities or other organizations in order to respond to a subpoena or court order, judicial process or to regulatory authorities, if we believe we are required to do so by law, or that doing so is reasonably necessary to comply with legal processes; when we believe it necessary or appropriate to disclose personal information to law enforcement authorities, such as to investigate actual or suspected fraud or violations of law, breaches of security, or breaches of this Policy; to respond to claims against us; and to protect the rights, property, or personal safety of OGHELP, our customers, or the public;</p>
                                <p>§  We share your information with payment processors, fraud detection agencies and similar third parties for the purpose of securing the site and protecting it against fraud, unauthorized transactions (such as money laundering), claims or other liabilities;</p>
                                <p>§  We share your information to help facilitate interactions between Users. For example if you are a Service Provider we may share certain limited information about you (such as the fact it is your first Job on OGHELP) with the Client to ensure the services you receive from the Service Provider will fit your needs; such sharing of information is limited in scope, will not include unnecessary personal identifying information (PII) and is only intended to improve the services provided by the Service Provider or Client and your user experience;</p>
                                <p>§  We share your information with OGHELP corporate affiliates that are related by common control for the purpose of operating the Site, providing our services to you and for other purposes listed herein; and</p>
                                <p>§  Your personal information will also be disclosed if we go through a business transition such as a merger, sale, transfer of all or a portion of OGHELP’s assets, acquisition, bankruptcy or similar event. In the event that we sell any business or assets, we will disclose your data to the prospective buyer. If we or substantially all of our assets are acquired by a third party, information held by us about our users will be one of the transferred assets.</p>
                                <p> Please note, our profile information and additional information regarding your activity is made public and is visible to all Users of the Site. When you publish your information and/or share your data with other OGHELP Users, you do so at your own risk. While OGHELP strives to protect your privacy and our Terms of Service require our Users not to use the data shared with them, OGHELP cannot ensure that all Users will do so.</p>
                                <p> This Site is also protected by reCAPTCHA and the <a href="https://policies.google.com/privacy">Google Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply with respect to data collected by reCAPTCHA. The use of Google reCAPTCHA is required in order to prevent fraud and misuse of the Site by use of automated machines. To learn more, please see <a href="http://www.google.com/intl/en/policies/privacy/">Google&#x27;s privacy policy</a>. </p>
                                <p> <strong>Where We Store Your Personal Information</strong></p>
                                <p><strong> </strong>Some of the personal information you provide to us will be stored or processed on our behalf by third party suppliers and data processors and may be located in other jurisdictions, such as the United States, India and Israel, whose laws may differ from the jurisdiction in which you live. Whether to third parties or internally, any transfers of personal information from the European Economic Area (<strong>“EEA”</strong>) to countries not deemed to provide an adequate level of data protection are governed by European Union (EU) standard contractual clauses, or in the case of the United States, the EU - US Privacy Shield, and/or equivalent data transfer regulations to protect the security and confidentiality of personal information. We will take all steps reasonably necessary to ensure that your personal information is treated securely and in accordance with this Policy.</p>
                                <p> <strong>Cookies</strong></p>
                                <p><strong> </strong>When you visit the Site, we use regularly accepted industry-wide technologies such as &quot;cookies&quot; (or similar technologies), which store certain information on your computer and which will allow us, among other things, to enable automatic sign-in to the Site, make your browsing much more convenient and effortless and allow us to test user experience and offer you personalized browsing or promotions. By continuing to use this Site, you are agreeing to our placing cookies on your computer or device in accordance with the terms of this Policy.</p>
                                <p>The Site uses cookies to collect statistical data about its use, to tailor the Site&#x27;s functionality to suit personal preferences and to assist with various aspects of Site operation. These files contain a variety of information such as information about OGHELP webpages visited by you, the length of time you visited the Site, data about how you came to visit the Site, areas viewed by you within the Site, and additional information. Cookies remain on your device for the period described below.</p>
                                <p> The following is a more detailed explanation of the types of cookies we use:</p>
                                <p><li>         <strong>Necessary cookies</strong><br/>Necessary cookies are essential and help you navigate the Site. This helps to support security and basic functionality and are necessary for the proper operation of the Site, so if you block these cookies we can&#x27;t guarantee your use or the security during your visit.</li></p>
                                <p><li>         <strong>Functionality cookies</strong><br/>Functionality cookies are used to provide you the best user experience. These cookies are, for instance, used to personalize content for you in line with your location. It also allows the Site to remember choices made (like turning off use of cookies or which location you have previously selected) to provide more personal features.</li></p>
                                <p><li>         <strong>Performance cookies</strong><br/>Performance cookies help us to understand the behavior of users of the Site. This allows us to continuously improve the Site to provide the best information in support of our project aims. These cookies are also used to help us understand how effective our Site is; for instance these cookies tell us which pages visitors go to most often and if they get error messages from web pages.</li></p>
                                <p><strong> </strong>All of the information that these cookies collect is aggregated, to assist us to improve how the Site works. Some of these cookies are managed by third parties, and you may refer to the third parties&#x27; own website privacy notifications for further information. In particular, we use Google Analytics cookies to obtain an overall view of user habits and volumes, and to help improve the overall experience on the Site. Google Analytics is a third-party web analysis service provided by Google Inc, which uses performance cookies and targeting cookies. The information generated by these cookies about your use of the Site (including your IP address) will be transmitted to and stored by Google Inc on servers in the United States.</p>
                                <p> Google will use the information collected for the purpose of evaluating your use of our Site on our behalf, compiling reports on website activity and providing other services relating to activity and internet usage to us. Google will not associate your IP address with any other data held by Google. You may refuse the use of cookies by selecting the appropriate settings on your browser as described below. Furthermore you can prevent Google’s collection and use of data (cookies and IP address) by downloading and installing the browser plug-in available under <a className="text-break" href="https://tools.google.com/dlpage/gaoptout?hl=en-GB">https://tools.google.com/dlpage/gaoptout?hl=en-GB</a>. This creates an opt-out cookie which prevents the further processing of your data. For more information about Google Analytics cookies, please see <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">Google&#x27;s help pages</a> and <a href="http://www.google.com/intl/en/policies/privacy/">privacy policy</a>.</p>
                                <p> If you prevent these cookies, we cannot guarantee how the Site will perform for you.</p>
                                <p> <strong>Blocking or Deleting Cookies</strong></p>
                                <p><strong> </strong>We shall store a cookie on your computer or device to remember this for next time, so that we can store your preferences and save you time on subsequent visits by eliminating the need to repeatedly enter the same data. You may set your browser to block all cookies, including cookies associated with our services, or to indicate when a cookie is being set by us. You should do this through the browser settings for each browser you use. Please be aware that some of our services will not function if your browser does not accept cookies. However, you can allow cookies from specific websites by making them &quot;trusted websites&quot; in your internet browser.</p>
                                <p> The following links may assist you in managing your cookies settings, or you can use the &#x27;help&#x27; option in your internet browser for more details:</p>
                                <p>§  <a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies">Internet Explorer</a></p>
                                <p>§  <a href="http://www.google.com/support/chrome/bin/answer.py?hl=en&amp;answer=95647">Google Chrome</a></p>
                                <p>§  <a href="http://support.apple.com/kb/PH5042">Safari</a></p>
                                <p>§  <a href="https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html">Adobe (flash cookies)</a></p>
                                <p>If you share the use of a computer or device, accepting or rejecting the use of cookies may affect all users of that computer or device.</p>
                                <p> Information on deleting or controlling cookies is also available at <a href="http://www.aboutcookies.org/">www.aboutcookies.org</a> (note that this website is not provided by OGHELP, and we therefore cannot ensure its accuracy, completeness or availability). It is important to remember that many of our services may not function properly if your cookies are disabled. For example, cookies may, in certain cases, save you from the need to enter usernames and passwords, and allow session continuity.</p>
                                <p> <strong>External Links</strong></p>
                                <p><strong> </strong>Please note that the Site contains links to third party sites wither directly or by underlying functionality of OGHELP for the purpose of providing OGHELP services and if you link to a third party site from the Site, any data you provide to that site and any use of that data by the third party are not under the control of OGHELP and are not subject to this Policy. You should consult the privacy policies of each site you visit. This Policy applies solely to personal information collected by our Site. If you upload content, including your personal information, to a social network and then tag the Site, your submission will be subject to that social network&#x27;s terms of use and privacy policy, even where you post on an official Fiver page on the social network. We do not have control over these terms of use and privacy policies and have not reviewed their adequacy. You should therefore review these before submitting any personal information.</p>
                                <p> <strong>Security</strong></p>
                                <p><strong> </strong>We take great care in maintaining the security of the Site and your information and in preventing unauthorized access, loss, misuse, alteration, destruction or damage to it through industry standard technologies and internal procedures. Among other things, we regularly maintain a PCI DSS (Payment Card Industry Data Security Standards) certification (with respect to payment by credit cards). In addition, we contractually ensure that any third party processing your personal information equally provide for confidentiality and integrity of your data in a secure way. However, the transmission of data via the internet is not completely secure, and although we will do our best to protect your personal information, we cannot guarantee the security of your data transmitted to the Site; any transmission is at your own risk. Once we have received your data, we will use strict procedures and security features to try to prevent unauthorized access. Users who have registered to the Site agree to keep their password in strict confidence and not disclose such password to any third party.</p>
                                <p> Further information about our data security practices can be provided on request.</p>
                                <p> <strong>Rights of EU Users and Data Subjects</strong></p>
                                <p><strong> </strong>Under applicable EU regulation, you have the following rights in respect of your personal information:</p>
                                <p>§  to obtain a copy of your personal information together with information about how and on what basis that personal information is processed;</p>
                                <p>§  to rectify inaccurate personal information;</p>
                                <p>§  to erase your personal information in limited circumstances where (a) you believe that it is no longer necessary for us to hold your personal information; (b) we are processing your personal information on the basis of legitimate interests and you object to such processing, and we cannot demonstrate an overriding legitimate ground for the processing; (c) where you have provided your personal information to us with your consent and you wish to withdraw your consent and there is no other ground under which we can process your personal information; and (d) where you believe the personal information we hold about you is being unlawfully processed by us;</p>
                                <p>§  to restrict processing of your personal information where: (a) the accuracy of the personal information is contested; (b) the processing is unlawful but you object to the erasure of the personal information; (c) we no longer require the personal information for the purposes for which it was collected, but it is required for the establishment, exercise or defense of a legal claim or (d) you have objected to us processing your personal information based on our legitimate interests and we are considering your objection;</p>
                                <p>§  to challenge processing which we have justified on the basis of our legitimate interest;</p>
                                <p>§  to object to decisions which are based solely on automated processing or profiling;</p>
                                <p>§  where you have provided your personal information to us with your consent, to ask us for a copy of this data in a structured, machine-readable format and to ask us to share (port) this data to another data controller; or</p>
                                <p>§  to obtain a copy of or access to safeguards under which your personal information is transferred outside of the EEA.</p>
                                <p>In addition to the above, you have the right to lodge a complaint with a supervisory authority for data protection.</p>
                                <p>We will ask you for additional data to confirm your identity and for security purposes, before disclosing data requested to you. We reserve the right to charge a fee where permitted by law. We will decline to process requests that jeopardize the privacy of others, are extremely impractical, or would cause us to take any action that is not permissible under applicable laws. Additionally, as permitted by applicable laws, we will retain where necessary certain personal information for a limited period of time for record-keeping, accounting and fraud prevention purposes.</p>
                                <p> <strong>Your California Privacy Rights</strong></p>
                                <p><strong> </strong>California Civil Code Section § 1798.83 permits California residents that are users of our Site to request certain information regarding our disclosure of personal information to third parties for their direct marketing purposes. To make such a request, please send an email to <a href={"mailto:support@oghelp.com"} target="_top" rel="noopener noreferrer">support@oghelp.com</a></p>
                                <p> <strong>Updating Your Information</strong></p>
                                <p><strong> </strong>We take steps to ensure that the personal information we collect is accurate and up to date, and we provide you with the opportunity to update your information through your account profile settings. In the event that you believe your information is in any way incorrect or inaccurate, please let us know immediately. We will make sure we investigate the matter and correct any inaccuracies as quickly as possible where necessary or give you ways to update it quickly or to delete it - unless we have to keep that information for legitimate business or legal purposes. When updating your personal information, we will ask you to verify your identity before we can act on your request. If for any reason you have a problem with deleting your personal information, please contact OGHELP Customer Support and we will make reasonable efforts to delete any such information pursuant to any applicable privacy laws.</p>
                                <p>You can review and change your personal information by logging into the Site and visiting your account profile page.</p>
                                <p>If we delete your User Generated Content (<strong>“UGC”</strong>), as defined in the OGHELP Terms of Service, from the Site, copies of your UGC may remain viewable in cached and archived pages, or might have been copied or stored by other Site users. Proper access and use of information provided on the Site, including UGC, is governed by our Terms of Service.</p>
                                <p> <strong>Contact Us</strong></p>
                                <p><strong> </strong>To exercise any of your rights in connection with your personal information, we kindly ask that you open a Customer Relations ticket by emailing us at <a href={"mailto:support@oghelp.com"} target="_top" rel="noopener noreferrer">suppor@oghelp.com</a>. Please include all the relevant details, so your ticket can be handled correctly. We will process any requests in line with any local laws and our policies and procedures. If you do not have an active OGHELP account, please contact us at <a href={"mailto:legal@oghelp.com"} target="_top" rel="noopener noreferrer">legal@oghelp.com</a>.</p>
                                <p>If you have any questions (or comments) concerning this Policy, please email our team at <a href={"mailto:legal@oghelp.com"} target="_top" rel="noopener noreferrer">legal@oghelp.com</a>, and we will make an effort to reply within a reasonable timeframe.<br/></p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="section-ale-10">
                            <div className="section-ale-12">
                            <div className="section-ale-13 hide">
                                <div className="section-ale-14">
                                <div className="text-ale-4">Partnerships</div>
                                </div>
                                <div className="section-ale-15">
                                <div className="section-ale-16">
                                    <a href="mailto:partners@oghelp.com" className="link-ale-2 w-inline-block">
                                    <div className="text-link-ale-1">Email partners</div>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="section-ale-13">
                                <div className="section-ale-14">
                                <div className="text-ale-4">Sales</div>
                                </div>
                                <div className="section-ale-15">
                                <div className="section-ale-16">
                                    <a href="mailto:sales@oghelp.com" className="link-ale-2 w-inline-block">
                                    <div className="text-link-ale-1">sales@oghelp.com</div>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="section-ale-13 hide">
                                <div className="section-ale-14">
                                <div className="text-ale-4">Contact us</div>
                                </div>
                                <div className="section-ale-15">
                                <div className="section-ale-16">
                                    <a href={"mailto:support@oghelp.com"} rel="noopener noreferrer" target="_blank" className="link-ale-2 w-inline-block">
                                    <div className="section-icon-ale-1"><img src="images/email-us3x_1email-us3x.png" alt="" className="icon-image-ale-1"/></div>
                                    <div className="text-link-ale-1">Email us</div>
                                    </a>
                                </div>
                                <div className="section-ale-16">
                                    <a href={"mailto:support@oghelp.com"} target="_top" rel="noopener noreferrer" className="link-ale-2 w-inline-block">
                                    <div className="section-icon-ale-1"><img src="images/call-us3x_1call-us3x.png" alt="" className="icon-image-ale-1"/></div>
                                    <div className="text-link-ale-1">Call us +12312312123</div>
                                    </a>
                                </div>
                                </div>
                            </div>
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

export default WrapperConsumer(PrivacyComponent);