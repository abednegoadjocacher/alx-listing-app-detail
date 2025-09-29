export default function Footer(){
    return(
       <>
            <div className="bg-blue-400 grid grid-cols-3">
                <section className="bg-red-400">
                    <h2>
                        Hello
                    </h2>
                    <p>
                        first section
                    </p>
                </section>

                <section className="bg-green-400">
                    <p>
                        second section
                    </p>
                </section>
                <section className="bg-yellow-400">
                    <p>
                        third section
                    </p>
                </section>
            </div>
       </>
    );
}