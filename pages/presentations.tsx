import Header from '../components/Header';

const presentations = [
    {
        title: 'What is a stock?',
        date: '2023-05-01',
        embedUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vTfdD1Bw_CO5s2okPBYP4O_8u2CqC-RWR7VnOEqmHvqU17Hum702TueF_QGZawV7g/embed?start=false&loop=false&delayms=3000'
    },
    {
        title: 'PE, VC, and RE',
        date: '2023-05-15',
        embedUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vQ9juwh9SvE55nTdWhd9CkNs9nhmUpHOOKGkLsm3dTQKGL5fntQbCveJYJa_0wwrQ/embed?start=false&loop=false&delayms=3000',
    },
    {
        title: 'Derivatives',
        date: '2023-05-22',
        embedUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vSrkJz3NlMcoPjiY106CZuAwaWz-SLSR2LzjynS9q6RL6UdAHtH--klEMEIrPOykQ/embed?start=false&loop=false&delayms=3000',
    },
    {
        title: 'Fixed Income',
        date: '2023-05-29',
        embedUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vT10DuxGhmibc00dUtrDb26rPm-YpJAP8AwOh1IrsRLIDVxl1jdA7h73XFjKct0_Q/embed?start=false&loop=false&delayms=3000',
    },
    {
        title: 'ESG Investing',
        date: '2023-06-05',
        embedUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vTyN3mwUTKCCWRhylmt3z62ZnfRRZ6rrjRWbdq6HYBIoLesm4FOPrZFjZ9veyAXqA/embed?start=false&loop=false&delayms=3000',
    },
    {
        title: 'Sector Breakdown',
        date: '2023-06-12',
        embedUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vSstOi-c5_CO3pcW3_Uv3qfPI8BvJNkoFyau7cELiBDNRWAbbxBxlKkItX7YaKCew/embed?start=false&loop=false&delayms=3000',
    },
    {
        title: 'IRAs and Personal Investing',
        date: '2023-06-19',
        embedUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vQb_SyaEf7hZeWmnzxeCUqPP1oqbYByuFjTQ_g9om7wJ2VkxeVhoE8ll_rWxQbd8A/embed?start=false&loop=false&delayms=3000',
    },
    {
        title: 'How To Open a Roth IRA with Fidelity',
        date: '2023-06-26',
        embedUrl: 'https://www.youtube.com/embed/BPaV8xMgz9g',
    },
];

const Presentations = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <Header />
            <section className="container mx-auto mt-4 px-4 md:px-0">
                <h1 className="text-4xl font-bold mb-6 text-center">Presentations</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 p-20 gap-8">
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
