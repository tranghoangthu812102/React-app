import React, { useEffect, useState } from "react"

const Default = () => {
    const listStudent1 = ['Huyen', 'Hoa', 'Hung', 'Long'];
    const [listStudent1State, setlistStudent1State] = useState(listStudent1);

    const [studentState, setStudentState] = useState('Huyen');
    const [indexState, setIndexState] = useState(0);
    useEffect(() => {
        setStudentState(listStudent1[indexState]);
    }, [indexState, listStudent1])
    let indexOfStudent = 0;
    const handleClick = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div>
                Tna
            </div>
            <div>
                学生一覧: [{listStudent1.map((student, index) => {
                    if (index !== listStudent1.length - 1) {
                        return `${student},`
                    } else {
                        return student
                    }
                })}]
            </div>

            <div>
                位置: {indexState + 1}
            </div>

            <div>
                名前:  {studentState}
            </div>
            <div>
                <div>
                    <button onClick={(e) => {
                        handleClick(e);
                        setIndexState(indexState);
                        let indexTest = indexState + 1;
                        if (indexTest === listStudent1.length) {
                            indexTest = 0;
                        }
                        setIndexState(indexTest)
                    }}>
                        Start1
                    </button>
                </div>


                <div>
                    <button onClick={(e) => {
                        handleClick(e);
                        setIndexState(indexState);
                        let indexTest = indexState - 1;
                        if (indexTest === -1) {
                            indexTest = listStudent1.length - 1;
                        }
                        setIndexState(indexTest)
                    }
                    }>
                        Start2

                    </button>
                </div>
            </div>
        </>
    )
}

export default Default;