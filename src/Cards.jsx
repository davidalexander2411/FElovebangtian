function Cards({data}) {
	return (
		<>
			{data.map((post, index) => (
				<div
					key={index}
					className={
						"p-8 w-40 md:w-64 rounded-md border-2 border-black" +
						(post.status === "approved"
							? " bg-green-200"
							: " bg-red-200")
					}
				>
					<h3>{post.Nation}</h3>
					<p>{post.Population}</p>
					<p>{post.Year}</p>
				</div>
			))}
		</>
	);
}

export default Cards;
