import { Button } from '../Button';
import type { Props } from './types';

function PostForm({ method = 'post', error, fields, ...props }: Props) {
	return (
		<form method={method} {...props} className='flex flex-col gap-4'>
			<div className='flex flex-col'>
				<label htmlFor='title' className='mb-2 text-center'>
					Title
				</label>
				<input
					defaultValue={fields?.title}
					className='p-4'
					name='title'
					placeholder='Title'></input>
				{error?.fieldErrors?.title && (
					<p className='text-red-500'>{error.fieldErrors.title}</p>
				)}
			</div>
			<div className='mb-4  flex flex-col'>
				<label className='mb-2 text-gray-600' htmlFor='body'>
					Body
				</label>
				<textarea
					defaultValue={fields?.body}
					className='p-4'
					name='body'
					placeholder='Write something for this post!'
				/>
				{error?.fieldErrors?.body && (
					<p className='text-red-500'>{error.fieldErrors.body}</p>
				)}
			</div>
			{error?.formError && <p className='text-red-500'>{error.formError}</p>}
			<Button type='submit' className='border border-blue-500'>
				Create Post
			</Button>
		</form>
	);
}

export default PostForm;
