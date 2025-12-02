import './hero.scss';

const HeroRight = () => {

    return (
        <div className='hero-right'>
            <div className='border-top'></div>
            <div className='first'>
                <div className='circle bg-first'></div>
                <div className='circle bg-second'></div>
                <div className='circle bg-third'></div>
            </div>
            <div className='second'>
                <code className="text-white-0">
                    <div>
                        <span className="me-2 text-pink-100">class</span>
                        <span className="me-2">Developer:</span>
                    </div>
                    <div>
                        <span className="ms-4 me-2 text-pink-100">def</span>
                        <span className="me-2">__init__</span>
                        <span>(self):</span>
                    </div>
                    <div>
                        <span className="ms-5 ps-3 me-2">self.name</span>
                        <span className="me-2 text-pink-100">=</span>
                        <span className='text-yellow-500'>
                            {`'`}Le Huynh Long{`'`}
                        </span>
                    </div>
                    <div className="ms-5 ps-3 me-2 text-pink-200">
                        <span className="text-white-0">self.skills</span>
                        <span className="me-2 text-pink-100">=</span>
                        <span>{`['`}</span>
                        <span >Python</span>
                        <span>{"', '"}</span>
                        <span >ReactJS</span>
                        <span>{"', '"}</span>
                        <span >FastAPI</span>
                        <span>{"', '"}</span>
                        <span >Django</span>
                        <span>{"', '"}</span>
                        <span >PostgreSQL</span>
                        <span>{"', '"}</span>
                        <span >Redis</span>
                        <span>{"', '"}</span>
                        <span >AWS</span>
                        <span>{"', '"}</span>
                        <span >Docker</span>
                        <span>{"']"}</span>
                    </div>
                    <div>
                        <span className="ms-5 ps-3 me-2 ">self.hard_worker</span>
                        <span className="me-2 text-pink-100">=</span>
                        <span className="text-red-500">True</span>
                    </div>
                    <div>
                        <span className="ms-5 ps-3 me-2 ">self.quick_learner</span>
                        <span className="me-2 text-pink-100">=</span>
                        <span className="text-red-500">True</span>
                    </div>
                    <div>
                        <span className="ms-5 ps-3 me-2 ">self.problem_solver</span>
                        <span className="me-2 text-pink-100">=</span>
                        <span className="text-red-500">True</span>
                    </div>
                    <div><span></span></div>
                    <div>
                        <span className="ms-4 me-2 text-pink-100">def</span>
                        <span className="me-2 text-green-700">hireable</span>
                        <span>(self):</span>
                    </div>
                    <div>
                        <span className="ms-5 ps-3 me-2 text-red-500">return</span>
                        <span>{`(`}</span>
                    </div>
                    <div>
                        <span className="ms-5 ps-4 text-blue-100">self.</span>
                        <span className="me-2 ">hard_worker</span>
                        <span className='text-blue-100'>and</span>
                    </div>
                    <div>
                        <span className="ms-5 ps-4 text-blue-100">self.</span>
                        <span className="me-2 ">problem_solver</span>
                        <span className='text-blue-100'>and</span>
                    </div>
                    <div>
                        <span className="ms-5 ps-4 text-blue-100">len(self.</span>
                        <span className="me-2">skills)</span>
                        <span className="me-2 text-blue-100">&gt;=</span>
                        <span className="text-red-500">5</span>
                    </div>
                    <div><span className="ms-5 ps-3 me-2 ">{`)`}</span></div>
                </code>
            </div>
        </div>
    )
}

export default HeroRight;
