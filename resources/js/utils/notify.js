export function authError(error) {
    let errorMessages = [];
    let detailedMessages = [];

    let errorMessage =
        error.response.data.message || "The given data was invalid.";
    errorMessages.push(errorMessage);

    if (error.response.data.errors) {
        detailedMessages = [].concat.apply(
            [],
            Object.values(error.response.data.errors)
        );
        errorMessages = errorMessages.concat(detailedMessages);
    }

    errorMessages.forEach(message => {
        let toast = Vue.toasted.show(message, {
            theme: "toasted-primary",
            position: "top-right",
            duration: 5000
        });
    });
}
