var h1 = document.createElement("h1");
h1.innerHTML = " ";
const display = () => {
    let count = 10;
    setTimeout(() => {
        h1.innerHTML = count;
        setTimeout(() => {
            count1 = count - 1;
            (count);
            h1.innerHTML = count1;
            setTimeout(() => {
                count2 = count1 - 1;
                (count1);
                h1.innerHTML = count2;
                setTimeout(() => {
                    count3 = count2 - 1;
                    (count2);
                    h1.innerHTML = count3;
                    setTimeout(() => {
                        count4 = count3 - 1;
                        (count3);
                        h1.innerHTML = count4;
                        setTimeout(() => {
                            count5 = count4 - 1;
                            (count4);
                            h1.innerHTML = count5;
                            setTimeout(() => {
                                count6 = count5 - 1;
                                (count5);
                                h1.innerHTML = count6;
                                setTimeout(() => {
                                    count7 = count6 - 1;
                                    (count6);
                                    h1.innerHTML = count7;
                                    setTimeout(() => {
                                        count8 = count7 - 1;
                                        (count7);
                                        h1.innerHTML = count8;
                                        setTimeout(() => {
                                            count9 = count8 - 1;
                                            (count8);
                                            h1.innerHTML = count9;
                                            setTimeout(() => {
                                                h1.innerHTML = ("Happy Independence day");
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}
document.body.append(h1);
display();