import Header from '../components/Header';

const presentations = [
    {
        title: 'What is a stock?',
        date: '2023-09-26',
        embedUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vTDOQj9B8zxtyyr6n6G0lNYGTI7kFTbuMf1NIfOQssKbA3awavQ-slqIqdc1VexOQ/embed?start=false&loop=false&delayms=3000'
    },
];

const Presentations = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <Header />
            <section className="container mx-auto mt-4 px-4 md:px-0">
                <h1 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-teal-400">Presentations</h1>
                <p className="text-lg text-center">Review our semester meeting presentations.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-8">
                    {presentations.map((presentation) => (
                        <div key={presentation.title} className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-2xl font-bold mb-2">{presentation.title}</h3>
                            <p className="text-lg mb-2">{presentation.date}</p>
                            <div className="aspect-w-16 aspect-h-9 md:aspect-w-4 md:aspect-h-3">
                                <iframe
                                    src={presentation.embedUrl}
                                    title={presentation.title}
                                    className="w-full h-80 rounded-lg"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Presentations;
