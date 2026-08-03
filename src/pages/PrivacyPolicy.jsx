import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Compass, Navigation, PhoneCall, CheckCircle } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import { Link } from 'react-router-dom';


export default function PrivacyPolicy() {
    return (
        <div className="w-full">
            {/* Page Hero */}
            <Hero
                title={`Terms of Service & Privacy Policy`}
                subtitle=""
                bgImage="https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=1600&auto=format&fit=crop"
            />

            {/* Main Grid: Location details and Map */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <section class="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
                            <header class="border-b border-slate-100 pb-6 mb-8">
                                <span class="text-xs font-semibold tracking-wider text-brand-red uppercase">Legal Document</span>
                                <h1 class="text-3xl font-bold tracking-tight text-slate-900 mt-1">Privacy Policy</h1>
                                <p class="text-sm text-slate-500 mt-2">Last Updated: August 2026</p>
                            </header>

                            <div class="space-y-6">
                                <p class="text-base leading-relaxed text-slate-600">
                                    This Privacy Policy explains how our Miami gas station ("we," "our") collects and uses your information when you visit our website.
                                </p>

                                <div>
                                    <h2 class="text-lg font-semibold text-slate-900 mb-3">1. Information We Collect</h2>
                                    <ul class="list-disc pl-5 space-y-2 text-slate-600">
                                        <li><strong class="text-slate-800">Contact Data:</strong> We collect your name, email, and phone number if you use our contact form.</li>
                                        <li><strong class="text-slate-800">Location Data:</strong> We may look at your general location to show you the closest station.</li>
                                        <li><strong class="text-slate-800">Cookies:</strong> Our site uses cookies to understand how visitors use our pages.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 class="text-lg font-semibold text-slate-900 mb-3">2. How We Use Your Data</h2>
                                    <ul class="list-disc pl-5 space-y-2 text-slate-600">
                                        <li>To reply to your questions or messages.</li>
                                        <li>To improve our website and customer service.</li>
                                        <li>We do not sell your personal data to third parties.</li>
                                    </ul>
                                </div>

                                <div class="bg-brand-red/5 rounded-xl p-6 border border-brand-red/50">
                                    <h2 class="text-lg font-semibold text-brand-red mb-2">3. Your Rights</h2>
                                    <p class="text-sm leading-relaxed text-brand-red-800/90">
                                        You can ask us to update or delete your information at any time by contacting us directly through our website contact page.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section class="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
                            <header class="border-b border-slate-100 pb-6 mb-8">
                                <span class="text-xs font-semibold tracking-wider text-red-600 uppercase">Agreement</span>
                                <h1 class="text-3xl font-bold tracking-tight text-slate-900 mt-1">Terms of Service</h1>
                                <p class="text-sm text-slate-500 mt-2">Last Updated: August 2026</p>
                            </header>

                            <div class="space-y-6">
                                <p class="text-base leading-relaxed text-slate-600">
                                    Welcome to our website. By browsing this site, you agree to follow these basic rules and terms of use.
                                </p>

                                <div>
                                    <h2 class="text-lg font-semibold text-slate-900 mb-3">1. Website Use</h2>
                                    <p class="text-slate-600 leading-relaxed">
                                        This site provides store hours, gas prices, and location information. You agree not to damage, disrupt, or attempt to hack our website.
                                    </p>
                                </div>

                                <div>
                                    <h2 class="text-lg font-semibold text-slate-900 mb-3">2. Intellectual Property</h2>
                                    <p class="text-slate-600 leading-relaxed">
                                        All logos, photos, and text on this site belong to our gas station. You cannot use, copy, or distribute our content for commercial purposes without our written permission.
                                    </p>
                                </div>

                                <div>
                                    <h2 class="text-lg font-semibold text-slate-900 mb-3">3. Liability Disclaimer</h2>
                                    <p class="text-slate-600 leading-relaxed">
                                        We try to keep gas prices and store hours accurate, but we cannot guarantee they are always up to date due to market shifts. We are not responsible for any issues or damages that result from using this website.
                                    </p>
                                </div>

                                <div>
                                    <h2 class="text-lg font-semibold text-slate-900 mb-3">4. Changes to Terms</h2>
                                    <p class="text-slate-600 leading-relaxed">
                                        We may update these terms at any time. Your continued use of the site means you accept the updated rules.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section >
        </div >
    );
}
