import React from 'react'
import {graphql} from 'gatsby'

import {Button} from '@modules/ui';
import {Link} from '@modules/navigation';
import {BlogCard, BlogResult} from '@modules/blog'

const BlogHome = () => {
	return (
		<div>
			
			<h3>Kernel Community Blog</h3>
			
			<ul>
				<li>Home</li>
				<li>Governance</li>
				<li>Community</li>
				<li>Editorial</li>
			</ul>

			<ul>
				<li>
					<BlogCard isLatest post={{type: 'governance'}} />
					<BlogCard isLatest post={{type: 'governance'}} />
					<BlogCard isLatest post={{type: 'governance'}} />
				</li>
			</ul>

			<div>
				<div>
					<BlogResult post={{type: 'governance'}} />
					<BlogResult post={{type: 'governance'}} />
					<BlogResult post={{type: 'governance'}} />
					<BlogResult post={{type: 'governance'}} />
				</div>

				<div>
					Languages

					<ul>
						<li>
							<Link to="/blog/en">
								English
							</Link>
						</li>
						<li>
							<Link to="/blog/es">
								Español
							</Link>
						</li>
						<li>
							<Link to="/blog/it">
								Italiano
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<Button icon="plus">

					See more posts

				</Button>
			</div>
		</div>
	)
}

// export const query = graphql``

export default BlogHome; 
