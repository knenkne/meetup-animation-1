export default ({ modifyRq, modifyRs, modifyRqUrl }) => ({
    handleSuccess: (response) => {
        Object.assign(response.request, {
            modifyRq,
            modifyRs,
            modifyRqUrl
        })
        return Promise.resolve(response)
    },
    handleError: (error) => {
        Object.assign(error.request, {
            modifyRq,
            modifyRs,
            modifyRqUrl
        })
        return Promise.reject(error)
    }
})
