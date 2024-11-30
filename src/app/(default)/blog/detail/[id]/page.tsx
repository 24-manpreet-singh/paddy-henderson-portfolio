"use client"
import BlogDetail from '@/components/molecules/blog-detail'
import { useParams } from "next/navigation"
import React, { useEffect, useState } from 'react'

const BlogDetailWrapper = () => {
    const router = useParams();
    const [blogId, setBlogId] = useState<string>("")

    useEffect(() => {
        if (router.id) {
            setBlogId(router.id.toString())
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <React.Fragment>
            <BlogDetail blogId={blogId} />

        </React.Fragment>
    )
}

export default BlogDetailWrapper