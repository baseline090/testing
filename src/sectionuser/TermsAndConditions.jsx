import React from 'react';
import Header from '../homecomponents/Header';
import Footer from '../homecomponents/Footer';

const TermsAndConditions = () => {


    const handleAgree = () => {

        console.log('User agreed to the terms and conditions');

    };

    return (
        <div>
            <Header />

            <div className="p-6 max-h-[100vh] overflow-y-auto space-y-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Acknowledgement and acceptance of these terms of services.
                </h4>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                    This page states the terms and conditions (the T&C) under which you may access and/or use this website (the Website). Please read this page carefully. If you do not accept the Terms and Conditions stated herein, you are advised not to use the Website.
                    <br /><br />
                    Eines Healthcare Private Limited ("Company" or "We" or "Us" or “Eines Healthcare Private Limited”) is the owner of this Website, and all the content herein, and reserves the right to change these T&C at any time without notice to you, and upon such change, the same shall be effective immediately. You agree to review these T&Cs regularly. By using the Website, you are agreeing to be bound by the T&C as updated from time to time.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Applicable Law
                </h4>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                    This site is created and controlled by Eines Healthcare Private Limited. The laws of India shall apply and govern all content herein and courts in Bangalore, Karnataka shall have jurisdiction in respect of all the terms, conditions and disclaimers herein.
                    <br /><br />
                    The Company accepts no liability whatsoever, direct or indirect for non-compliance with the laws of any country other than that of India. The mere fact that the Website can be accessed in a country other than India would not result in such laws of the said country applying to the Website.
                    <br /><br />
                    It shall be the sole responsibility of foreign residents including Non-Resident Indians in foreign jurisdictions to verify whether the services available on the Website can be accessed and utilised in their respective jurisdictions. The services which are part of the Website do not constitute an offer to sell or a solicitation of an offer to buy any policies/products to any person in any jurisdiction where it is unlawful to make such an offer or solicitation.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Eligibility
                </h4>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                    You represent and warrant that you are competent and eligible to enter into a legally binding agreement and have the requisite authority to enter into this Agreement and perform your obligations herein. You shall not use this Website if you are not competent to contract under the applicable laws, rules and regulations.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Registration Requirement
                </h4>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                    You agree to use such services of the Company in a manner consistent with the terms and conditions of this Agreement and with all applicable laws and regulations.
                    <br /><br />
                    Further, the “Partner/Customer" of this Website does hereby agree and understand that the information furnished on this Website is for information and guidance purposes only and must not be construed as a recommendation by Eines Healthcare Private Limited to purchase any product. The decision to purchase the product should be based on your evaluation of the product. Further, you must exercise due care in ensuring the completeness and accuracy of the information provided. Eines Healthcare Private Limited and its employees shall not be liable for any loss or damage caused by or arising out of reliance placed on such incomplete or inaccurate information.
                    <br /><br />
                    Further, by effecting a transaction that may be allowed by Eines Healthcare Private Limited on the Website, you agree to provide complete and irrevocable authority to Eines Healthcare Private Limited to take steps and carry out tasks that are essential and relevant to the provision of the services for which the transaction is effected. You further acknowledge and accept that the records maintained by Eines Healthcare Private Limited concerning the transactions effected by you at the Website shall be the conclusive evidence of such transaction and shall be final and binding on you and your assigns and successors.
                    <br /><br />
                    Eines Healthcare Private Limited reserves the right to suspend, withdraw, modify, add or cancel any or all of the services offered on the Website without any prior notice. Any such suspension, withdrawal, modification, addition or cancellation shall become binding on you forthwith.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                </h4>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                    This Agreement shall continue to be valid and in effect as long as you are using the Website or the services provided through the Website. The Website provides an online platform wherein the “Partner/Customers” can purchase/buy insurance policies of various providers and other health benefit products as listed on the Website per the terms and conditions set forth for such policies/products.
                    <br /><br />
                    You agree to use such services of the Company in a manner consistent with the terms and conditions of this Agreement and with all applicable laws and regulations.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Card or Bank Account Details
                </h4>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                    You agree, understand and confirm that the bank or credit/debit card details provided by you for buying the insurance policies offered by Eines Healthcare Private Limited on the Website shall be correct and accurate and you shall not use the bank account and/or credit/debit card which is not lawfully owned by you. You further agree and undertake to provide the correct and valid bank account and/or credit/debit card details to Eines Healthcare Private Limited.
                    <br /><br />
                    Further, the said information shall not be stored, utilized and shared with any of the third parties by the Company unless required by law, regulation or court order. You shall fully indemnify the Company from any loss or damage arising out of a non-compliance of this condition by you.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Cancellation Policy
                </h4>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                    The “Partner/Customer" does hereby agree that before purchasing the policy/products listed on the Website, the “Partner/Customer” shall be solely responsible for verifying the accuracy and completeness of all information and shall be satisfied by the suitability of the product and shall not be entitled to any refund for the product so purchased.
                    <br /><br />
                    Further, the Partner/Customer does hereby understand and agree that the Company shall not be liable for any discrepancies in the information provided by the “Partner/Customer”.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Limitation of Liability
                </h4>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                    The Company shall not be responsible for any errors, omissions or representations on any of the pages or links on any of the pages. The Company and its affiliates, directors, employees, agents, representatives, partners and service providers shall not be liable for any direct, indirect, special, incidental, consequential or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data or other intangible losses, resulting from: (a) the use or the inability to use the Website; (b) unauthorized access to or alteration of the user’s transmissions or data; (c) any other matter relating to the Website or the services provided therein.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Assistance
                </h4>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">For any concerns or questions about any aspect of these Terms &amp; Conditions of use of the Website, please feel free to contact us at
                    <br />
                    <a className='text-customcolor' href="#">contact@jodohealth.in</a>.</p>

            </div>
            <Footer />
        </div>
    );
};

export default TermsAndConditions;
