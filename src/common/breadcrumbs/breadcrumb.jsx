import Link from 'next/link';
import React from 'react';

const Breadcrumb = ({title="About" , innertitle="" }) => {
    return (
        <>
            <section className="breadcrumb__area include-bg pt-50 pb-50" 
                  style={{backgroundImage: ``}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                        <div className="breadcrumb__content p-relative z-index-1">
                            <div className="breadcrumb__list" style={{fontSize: '30px'}}>
                                <span><Link href="/">Home </Link></span>
                                <span className="dvdr"><i className="flaticon-arrow-right"></i></span>
                                <span>{title}</span>
                            </div>
                            <h3 className="breadcrumb__title" style={{fontSize: '40px'}}>{innertitle}</h3>
                        </div>
                        </div>
                    </div>
                </div>
            </section>            
        </>
    );
};

export default Breadcrumb;