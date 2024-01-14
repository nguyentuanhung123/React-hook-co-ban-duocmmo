export const getUser = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {
                    name: "Nguyen Tuan Hung",
                    age: 22,
                    address: "Ha Noi"
                },
                status: 200
            });
        }, 2000);
    });
