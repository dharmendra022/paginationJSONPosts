import React from 'react'

const Posts = ({ post, loading }) => {
    return (
        <>
            <h1 className='text-center'>Pagination Example</h1>
            <table className="table p-2 bg-light border">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ? (
                            <div className="spinner-border m-5" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        ) : (




                            post.map((value, index) => {
                                return (
                                    <>
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{value.name}</td>
                                            <td>{value.email}</td>
                                            <td>{value.body}</td>
                                        </tr>


                                    </>
                                )

                            })
                        )

                    }

                </tbody>
            </table>
        </>
    )
}

export default Posts
