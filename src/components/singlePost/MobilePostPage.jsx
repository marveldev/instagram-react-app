import { useState } from 'react'
import MobilePostComments from './MobilePostComments'
import MobileSinglePost from './MobileSinglePost'

const MobilePostPage = () => {
  const [postCommentIsOpen, setPostCommentIsOpen] = useState(false)

  return (
    <>
      {postCommentIsOpen &&
        <MobilePostComments
          setPostCommentIsOpen={setPostCommentIsOpen}
        />
      }
      {!postCommentIsOpen &&
        <MobileSinglePost
          setPostCommentIsOpen={setPostCommentIsOpen}
        />
      }
    </>
  )
}

export default MobilePostPage
