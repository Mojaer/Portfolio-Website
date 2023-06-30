import Title from "../../Components/Title/Title";
import facebook from '../../assets/social media/icons8-facebook-144.png'
import whatsapp from '../../assets/social media/icons8-whatsapp-144.png'
import linkedin from '../../assets/social media/icons8-linkedin-144.png'


const Contact = () => {

    const handleMessage = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const message = form.message.value
        console.log(email, message)
    }
    return (
        <section className="Home py-10 h-screen text-center md:me-80 lg:me-96 p-6 ">
            <Title title={'CONTACT ME'}></Title>

            <h1 className="text-2xl text-emerald-50 font-medium">Contact with me</h1>
            <div className="my-6">
                <button className="rounded-full w-10 h-10 font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700  shadow drop-shadow-md hover:shadow-lg shadow-white" >
                    <a href="https://www.linkedin.com/in/mojaer-ahmed-2793a41a9/" className="flex justify-center " target="_blank" rel="noreferrer"><img className="w-full" src={linkedin} alt="" /></a>
                </button>
                <button className="rounded-full ms-3 w-10 h-10 font-bold bg-gradient-to-r from-green-300 via-green-600 to-green-300  shadow drop-shadow-md hover:shadow-lg shadow-white" >
                    <a href="https://wa.me/01674052940?text=urlencodedtext" className="flex justify-center  " target="_blank" rel="noreferrer"><img className="w-full" src={whatsapp} alt="" /></a>
                </button>
                <button className="rounded-full ms-3 w-10 h-10 font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700  shadow drop-shadow-md hover:shadow-lg shadow-white" >
                    <a href="https://www.facebook.com/mojaer.ahmed" className="flex justify-center " target="_blank" rel="noreferrer"><img className="w-full" src={facebook} alt="" /></a>
                </button>
            </div>
            <div className="mx-10 ">
                <h1 className="text-2xl text-emerald-50 font-medium my-6 underline">tell me your Opinion</h1>
                <form onSubmit={handleMessage} className="text-white">
                    <div className="md:col-span-5 mx-auto text-left w-2/3">
                        <label htmlFor="email">Email Address</label>
                        <input required type="email" name="email" id="email" className="h-10 border mt-1 text-black rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
                    </div>
                    <div className="md:col-span-5 mx-auto text-left w-2/3 my-5">
                        <label htmlFor="text">message</label>
                        <textarea required className="mb-3 mt-1 block w-full px-2 py-1.5 border text-black border-gray-300 rounded-md text-lg  shadow-sm placeholder-gray-400 focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500" name="message" placeholder="Write your message"></textarea>
                    </div>
                    <input className="rounded-xl w-2/12 text-lg font-bold btn md:p-3 bg-gradient-to-r from-indigo-800 via-sky-950 to-blue-700  shadow drop-shadow-md hover:shadow-lg shadow-white" type="submit" value='send' />
                </form>

            </div>
        </section>
    );
};

export default Contact;