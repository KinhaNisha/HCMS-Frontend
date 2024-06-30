import React from "react";
import { useNavigate } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import LogoUrl from "../images/logo.png";
import AyurvedImage from "../images/ayurved-logo.png"

function HomePage() {
    const navigate = useNavigate();
    const onClickAppointment = () => {
        navigate("/ChooseSpeciality")
    }

    const talktoDoctor = () => {
        navigate("/")
    }
    const buyMedicine = () => {
        navigate("/")
    }
    const checkReports = () => {
        navigate("/")
    }
    const medicalHistory = () => {
        navigate("/")
    }
    const ayurved = () => {
        navigate("/")
    }

    return (
        <div>
            <Header />
            <h3 style={{ margin: '20px 30%' }}>Make your Health Better with us</h3>
            <div className="content-box">
                <div className="TG-1">
                    <img
                        src={LogoUrl}
                        id="logo"
                        alt="Sethoscope Logo"
                        onClick={talktoDoctor}
                    />
                    <p className="logo-name">Talk a Doctor</p>
                </div>
                <div className="TG-1">
                    <img
                        src="https://www.medibuddy.in/assets/services/consulation.svg"
                        id="logo"
                        alt="Appointment logo"
                        onClick={onClickAppointment}
                    />
                    <p className="logo-name">Book Appointment</p>
                </div>
                <div className="TG-1">
                    <img
                        src="https://img.freepik.com/premium-psd/supplement-bottle-jar-box-mockup_669874-2602.jpg?size=626&ext=jpg&ga=GA1.1.1340249670.1710238107&semt=ais"
                        id="logo"
                        alt="Medicine logo"
                        onClick={buyMedicine}
                    />
                    <p className="logo-name"> Buy Medicine</p>
                </div>
                <div className="TG-1">
                    <img src={AyurvedImage}
                        id="logo"
                        alt="Ayurved logo"
                        onclick={ayurved}
                    />
                    <p className="logo-name">Ayurved medicine</p>
                </div>
                <div className="TG-1">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAAD6CAMAAAA89pM0AAAAgVBMVEX///8AAACpqalra2uAgICkpKQgICD7+/s/Pz8FBQXd3d329vaQkJBXV1cYGBjCwsLt7e0mJiZOTk6IiIhhYWHR0dHk5OR4eHjJycnw8PAtLS0PDw+1tbWenp7X19dnZ2dGRka7u7s3NzexsbGMjIxcXFxPT0+YmJg8PDxycnIqKiquEdMKAAAI50lEQVR4nO2daWPiIBCGpWpj1darRq3Go7Xn//+B22gOboYIAbq8n3YbkvAYCGSYGTodq9pnvffXn/lqPNnYvZFd7VcI0/zNdX2aanlElB7uXNepkVY0R66XvetqaSvd8kB+9em6ZppaCjh+tXJdNy1JQMJCSWUgCJ1d1w+uezkJOrmuIFQ9BQhCI9dVhGmvBEHfrusIEzMgcjR0XUmIhgAQ1HVdS4i4YzujEOaTVJVf76adTrLuUn8OYDZJDYrVCzf9IP7+7rKOMH3i9b2fYkeIl/PWWQXBOuD1nRKHnvFD/g0p6ZBQ+oPVdkcWTXCSRb/fv7t72+1Op8lkvVzuh6kbgFLf/FfTRU904U9JYeR4aimdKzKfIlM5CdUY25V0+r5kir/ISdgT2pOUhJ2SKCYy3pKwXXgeKAlbsVCfyYQp/tQWSTJSKdEhYd6qEzkIQ6Jfn4vS7PiguBNCfR0SRN9ipknSV9Zne8zo3pg+K8/KRRsR5STUGK+c79Mkd6A6HQiWDHSOLgkiLI5vyqs3I0Eoq085qEtfpUmC1jpNpTFJ/QkqmzyR0iVB47Kk2uByA0lp4oA2LdSABM12081mulOZwC5qTnJ9Fanmdbj0SXR0A8ll9glvWz6T/Lavkc69/CX5/Qg96RT3mOQEtE8V0hvjdaU/xmNa8Wfa80OXpwM9KbRLMhHUgl9lzhJBD74YaJdErD07PN3TNkPU1TF0uiLpdDbMvIQmoXuCryRsL6JINO21IMM8WJprEdSUlCRZ6F2r03k1CPKqe/OFmORB91qdJOuZUsb9AJRKTBKaN8adkCSE9RlcGxHJ3HXNtHUUkAS05F9oISDJ1Kd6pkxAElqHJ0fHSOKHIol/iiT+KZL4JyjJ6Pxyr6fZYc29o2MSHTNrrTH/nk5JHhuRtOpPByPJ3UyO54WOzrkZsE0vbRhJ3ri0W/2s3eYFJ2EXohWKJA3lgCRdmTC/rGQ28JZIDBkrqXVxFyQAx24XJF00zwR+jIGRXOwAPa5xLCiStFe4BPFMMSGRnOvyc7aJBdTjyckY44MpHE+UDk4g0UbwG0jG5G/0Aiaxo+YkzOI9/UkTDAmzQv5FFQiGhF1ypTp9MCSsGwI1qgRDwnrrhPpM6NCecEnY1mWPpPCxlZYx2Lro1WJzJOVrciaLS2lMwnFTouotIkmGqUrUCdUdHm2Q8ILeYSSAeRd5Qr2sO7NBwrGAUY4NzefCVARRTfJjg2THVoCa2odCwrqp0LFYwZAwcVl0qHswJHT425E+bqzH17NuSyRU+2Le9UJ712KsUllyfdGpusdsuL/INAnhm8YuHd08MkoiIjhD5E3f8ZiDRY89ejOJJFCQc7ubSOq+e+RU5GYSSSgBJwb1JhJs6sVZkwiIhIgaY3thMCRTalo/pifdYZAka06Ax2pHvFICIEn7wmCup8c6FO9mEkmkoAmS4VgVijhfGiJhv68rcbyyNUlSRTD4VT0zJJ3sfBnxa3vU7JDr+cDz4NAkgQW0HA2RYHe/6iApZYVkLiVJYN+8tepZ97NfJMK5sCjjgrckwu8Tkdt4JIkk9kjqr19Z2jIHb2FhjxeGV7yXJWQxT5okb9uZWvePUhLR1+9ZbPddTy6SJvmJHjgARZKGiiQA/R2Sex9J8iMvh2ct5Wn52oyRApKAc5eQajOfGJBkBPpWpNVqolpwhMBbd66nx892M7z9f7EO/iuS+KdI4p8iiX+KJP4pkvin9khs56VvjWTJuPQbVmskczaDtVm1RZKbUO2m2G+LZIBsJ6ZviWR9uajVh2KcJOWmebq6gll9KMZJnjkOS5WHi9ZVNTNfmSZJuYscpXeeTlKwqaat0DTJ9291mR/zVF0WnjovX8jS2gXNMMllSZAZzTFjGbTJbC7hhTr7OxgmuXoYURa7E3ZdoH11VDjHaGzDYZak9MsgVwwJlx3QdZLyKTIBeWKZJSmdvoiYBNJvHZKQIan9d4/gexslmXJPLwJqy9oBegruiCxzuiFklATzJ6z7aun1Oypc6NRrKuRGCbzxyTYJnpSlDm7clq2qQlJchk5PC0wQYpKEiHAsf/qy/knFpEgGWG3sVG0AAPuwMUhC5ckphrViW4U+BiV9KFWETlYHFoMSpEBJNg9PKhVnlo1jRlz/8p+iSJWRddndCi5ybVOVIyR7sy2TWRVMgqCaltEceVdNtvjlyvdxMdzIlvyujfNDXIAJ4DBO0q1fousqhqCczhdj5EJVzeqxiRcFmTHTOMkQ88dKyiuWn1in4v/5QxlILlK9ecV5562THPCLdot/1MF7xW+8ki/BYn7NwnRb1kmuea6oEMF6Rnkq/rKUbe5AzKVFfm1MaCM4p9rHI0Q9Hjf+mqEfxZG9BuVpPplz78TMYixZJIhZI/7td0KEDKbMtWVbwd6wA+IAvq2eUW8QWyTYZn/kCI2H3xi1Glmzd63LKx2pA3VP0fZOksqe5a7MwUybFaqHYngbM4s2yOuP/8H8vZgCmM5LaJFkKKjw9aEY3xbTpl04n3Tx/Md/5yk/5vcutWrh/uK3oTX60t8jQCmrJFPBVtFWdim1u+rQbzHdaFz79U+RxD9FEv8USfxTJPFPkcQ/QUmSb+6ugu7EzKfBJMgzNbZBJrxscC7V2C4cSaypOYl6G/Z21XhNK3lCDz6p+TPpJL6pMYn3iiT+KZL4p0jinyKJf4ok/imS+KdI4p8iiX8Ckwxbl6XoJgeWO80VcI+tRJqeLZGkBUUS9N/0eBM7dupt76mZauo/HBm9VyTxT5HEP0US/xRJ/FMk8U9/n6TNfLpmlAlIDAa1taSegOToumLaGghIWk1ybEJEWC1BElpH+RSS6CRt8UBk0DZJYjvDnll1JSRBtS9q10uKpM734L0WSE6CPloMs7pBKZPHgbMb8ftuaiFgz6RGE3YHvC2VRqfQw+vAX30xe/XmOjLNLVQtyK0jA9akw3T5QNVhXsuBKh8IvYsDaKJrqsa/0FOKvBWZuqTnqlJOho6C5c5cq0t7LCIlShLuG+yTmVotx4fBfVgaHMZ1PpR/E6rP+irp4rkAAAAASUVORK5CYII="
                        id="logo"
                        alt="medical history logo"
                        onclick={medicalHistory}
                    />
                    <p className="logo-name">Check Medical History</p>
                </div>
                <div className="TG-1">
                    <img src="data:image/png;base64,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"
                        id="logo"
                        alt="reports logo"
                        onclick={checkReports}
                    />
                    <p className="logo-name">Download Reports</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;