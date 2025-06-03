import {motion} from "framer-motion";
import {ArrowRight} from "lucide-react";
import whiteLogo from "../../assets/whiteLogo.png";
import darkLogo from "../../assets/darkLogo.png";

const BannerMobile = ({darkMode}: {darkMode: boolean}) => {
    return (
        <section className="relative overflow-hidden">
            <div className="container mx-auto px-4 pt-12 pb-20 md:pt-24 md:pb-32">

                <div className="max-w-2xl">
                    <motion.h1
                        className="text-4xl md:text-6xl font-light leading-tight tracking-tighter mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Descubra momentos inesquecíveis <span className="font-normal">prontos para acontecer</span>
                    </motion.h1>

                    <motion.img
                        src={darkMode ? whiteLogo : darkLogo}
                        alt="Background"
                        className={`w-full h-auto rounded-full object-cover`}
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    />

                    <motion.p
                        className="text-lg text-gray-600 mb-8 md:pr-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        De reuniões íntimas a grandes celebrações, encontre eventos que combinem com seu humor e estilo.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="inline-flex items-center text-lg font-medium group">
                            Ver Eventos
                            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                                    <ArrowRight className="h-5 w-5" />
                                </span>
                        </div>
                    </motion.div>

                </div>

            </div>

            {/*<motion.div*/}
            {/*    className="absolute -right-24 md:right-0 -bottom-36 md:-bottom-24 w-3/4 md:w-1/2 h-96 rounded-full bg-yellow-50 z-[-1]"*/}
            {/*    initial={{ scale: 0, opacity: 0 }}*/}
            {/*    animate={{ scale: 1, opacity: 1 }}*/}
            {/*    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}*/}
            {/*/>*/}


        </section>
    );
}

export default BannerMobile;