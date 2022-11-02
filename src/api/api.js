
const baseURL = "https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT/"



const makeHeaders = async(token) => {
    return {
        'Content-Type': 'application/json',

    };

if (token) {
    headers['Authorization'] = `Bearer ${token}`;
}

    return headers;
}



const callAPI = async (endpointPath, defaultOptions={}) => {
    const options = {
        headers: makeHeaders(defaultOptions.token), 
    };

    if (defaultOptions.method) {
        options.method = defaultOptions.method;
    }

    if (defaultOptions.body) {
        options.body = JSON.stringify(defaultOptions.body);
    }

try {
    const response = await fetch(`$(baseURL)${endpointPath}`, options);
    const {success,error, data} = await response.json();

    if (success) {
        return {
            error: null,
            data: data
        };

    } else {
        return {
            error: error.message,
            data: null,
        }
    }
   
    return result;
} catch (error) {
    console.error('Failed while calling ${endpointPath}:', error);

    return {
        error: defaultOptions.defaultError,
        data: null
    };
}


};


export const fetchPosts = async () => {
const result = await callAPI('posts',{
bodyKey: 'post',
defaultError: 'Failed to load posts!'
});

return {
    error, 
    posts: data ? posts.data : []
};


    try {
        const {success, error, data} = await callAPI('/posts');

            if (success) {
                return {
                    error: null,
                    posts: data.posts
                };
            } else {
                return{
                    error: error.message,
                    posts: [],  
                };
            }

    } catch(error) {
        console.error("ERROR FETCHING POSTS!!!", error);

        return  { error: 'Failed to load posts',
        posts: []
    };
    }


    };







export const registerUser = async(username, password) => {
    try {
    const {success, error, data} = await callAPI('users/register', {
    method: "POST",
    body: {
        user: {
            username,
            password,
        },
    }
    });

if (success) {
    return {
        error: null,
        token: data.token,
        message: data.message
    };
} else {
    return {
        error: error.message,
        token: null,
        message: null
    }
}
} catch (error) {
    console.error ("NO GO SIR", error);

    return {
        error: 'FAILURE!!',
        token: null,
        message: null
    }; 
};

export const fetchUser = async (token) => {
    try {
        const {success, error, data} = await fetch('users/me', {
            token: token
        });

        if (success) {
                return {
                    error: null,
                    user: data.user

                };
        } else {
                return {
                    error: error.message,
                    user: null
                }
        }

    } catch (error) {
        console.error('failed to fetch guest', error);

        return {
            error: 'Failed to load guest information',
            user: null
        };
    }

};



//     console.log("REPONSE HOOOOOOYEEEEE", response)
//     const data = await response.json();
//     console.log("---------data------------", data)
//     return data;
// } catch (error) {
//     console.error("ERROR ERROR", error)

//     return {error: error.message, posts: []}
// }
// }
