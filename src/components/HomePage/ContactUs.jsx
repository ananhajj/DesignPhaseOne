import { Clock, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import CitySelect from './CitySelect';

const TURKEY_CITIES = [
    "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin",
    "Aydın", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur",
    "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ", "Erzincan",
    "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Iğdır", "Isparta", "İstanbul",
    "İzmir", "Kahramanmaraş", "Karabük", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kırıkkale", "Kırklareli", "Kırşehir",
    "Kilis", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Mardin", "Mersin", "Muğla", "Muş",
    "Nevşehir", "Niğde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas",
    "Şanlıurfa", "Şırnak", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak"
];

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',              // NEW
        subject: '',
        message: '',
        interestedProject: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry! Our sales team will contact you within 24 hours.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            city: '',           // reset
            subject: '',
            message: '',
            interestedProject: ''
        });
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Contact Our Sales Team
                    </h1>
                    <p className="text-xl text-gray-600">
                        Ready to find your dream home? Get in touch with our experts
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-lg p-8 h-fit">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                                            <Phone className="h-6 w-6 text-yellow-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Sales Hotline</h3>
                                        <p className="text-gray-600">+90 212 555 0100</p>
                                        <p className="text-gray-600">+90 212 555 0101</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                                            <Mail className="h-6 w-6 text-yellow-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                                        <p className="text-gray-600">sales@constructcorp.com</p>
                                        <p className="text-gray-600">info@constructcorp.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                                            <MapPin className="h-6 w-6 text-yellow-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Sales Office</h3>
                                        <p className="text-gray-600">
                                            Maslak Business Center<br />
                                            Büyükdere Caddesi No: 255<br />
                                            34398 Istanbul, Turkey
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                                            <Clock className="h-6 w-6 text-yellow-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Sales Hours</h3>
                                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 7:00 PM</p>
                                        <p className="text-gray-600">Saturday: 10:00 AM - 6:00 PM</p>
                                        <p className="text-gray-600">Sunday: 11:00 AM - 5:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
                                <div className="flex items-center mb-2">
                                    <MessageSquare className="h-5 w-5 text-yellow-600 mr-2" />
                                    <span className="font-semibold text-gray-900">Quick Response</span>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Our sales team responds to all inquiries within 2 hours during business hours.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name / Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Phone / City */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                            placeholder="+90 555 123 4567"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                                            City (Turkey) *
                                        </label>
                                        <CitySelect
                                            value={formData.city}
                                            onChange={(city) => setFormData(prev => ({ ...prev, city }))}
                                            options={TURKEY_CITIES}
                                            required
                                            name="city"
                                        />
                                    </div>
                                </div>

                                {/* Interested Project (full width) */}
                                <div>
                                    <label htmlFor="interestedProject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Interested Project
                                    </label>
                                    <select
                                        id="interestedProject"
                                        name="interestedProject"
                                        value={formData.interestedProject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    >
                                        <option value="">Select a project</option>
                                        <option value="palm-residence">Palm Residence</option>
                                        <option value="golden-heights">Golden Heights</option>
                                        <option value="garden-villas">Garden Villas</option>
                                        <option value="general">General Inquiry</option>
                                    </select>
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="unit-inquiry">Unit Availability & Pricing</option>
                                        <option value="site-visit">Schedule Site Visit</option>
                                        <option value="payment-plans">Payment Plans</option>
                                        <option value="investment">Investment Opportunities</option>
                                        <option value="general">General Information</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                                        placeholder="Please tell us about your requirements, preferred unit type, budget range, or any specific questions..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-200 flex items-center justify-center"
                                >
                                    <Send className="h-5 w-5 mr-2" />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
