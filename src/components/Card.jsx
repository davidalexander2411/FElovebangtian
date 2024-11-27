import postit from "../../public/img/postit.png"

function Card({post, index}) {
    return (
        <div
            key={index}
            className="w-64 h-60 relative rounded-md"
        >
            <img 
                src={postit} 
                alt="card" 
                className="absolute z-[1] w-full h-full object-cover"
            ></img>
            <div className="absolute inset-0 z-[2] flex items-center justify-center">
                <div className="text-left w-[85%] h-[70%] rounded-lg p-3">
                    <h3 className="text-sm font-semibold break-words truncate">Example Title ppppppppppppppp pppp</h3>
                    <p className="text-sm break-words">User {post.Population}</p>
					<div className="h-24 overflow-auto">
                    	<p className="text-sm break-words">example request example request example example requestexample requestexample requestexample requestexample requestexample requestexample requestrequest example request example request example request</p>
					</div>
					<div className=" flex items-center justify-end w-full h-auto">

					<a href="https://wa.me/+6282111416801?text=pesankhususyanginginkamusampaikan" className="text-sm px-2 rounded-xl shadow-md break-words mt-2 text-right bg-white">Contact</a>
					</div>
                </div>
            </div>
        </div>
    );
}

export default Card;