const commentData = [
  {
    name: "vivek chenna",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur porro ratione deserunt omnis consectetur doloremque  ",
    replies: [
      {
        name: "vivek chenna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur porro ratione deserunt omnis consectetur doloremque  ",
        replies: [],
      },
      {
        name: "vivek chenna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur porro ratione deserunt omnis consectetur doloremque  ",
        replies: [],
      },
      {
        name: "vivek chenna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur porro ratione deserunt omnis consectetur doloremque  ",
        replies: [],
      },
    ],
  },
  {
    name: "vivek chenna",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur porro ratione deserunt omnis consectetur doloremque  ",
    replies: [
      {
        name: "vivek chenna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur porro ratione deserunt omnis consectetur doloremque  ",
        replies: [],
      },
    ],
  },
  {
    name: "vivek chenna",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur porro ratione deserunt omnis consectetur doloremque  ",
    replies: [
      {
        name: "vivek chenna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur porro ratione deserunt omnis consectetur doloremque  ",
        replies: [],
      },
    ],
  },
  {
    name: "vivek chenna",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur porro ratione deserunt omnis consectetur doloremque  ",
    replies: [
      {
        name: "vivek chenna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
      {
        name: "vivek chenna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
    ],
  },
  {
    name: "vivek chenna",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur porro ratione deserunt omnis consectetur doloremque  ",
    replies: [
      {
        name: "vivek chenna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        replies: [
          {
            name: "vivek chenna",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  return (
    <div className="flex mt-2 border-2 border-gray-200 ml-3">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        alt="user"
        className=" w-8 h-8"
      />
      <div>
        <p className="font-bold">{data.name}</p>
        <p className=" break-words">{data.text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment key={index} data={comment} />
      <div className="pl-5 border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className=" max-w-5xl">
      <div className="border-2 border-black ml-10 mt-4">
        <h1 className="font-bold text-3xl pb-3">Comments:</h1>
        <CommentList comments={commentData} />
      </div>
    </div>
  );
};

export default CommentContainer;
