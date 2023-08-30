import React from 'react';
import { Link } from 'react-router-dom';
import OopsImage from './opps.jpg'; // Replace with your actual image path
import './ErrorPage.css';

function ErrorPage() {
  return (
    <section class="page_404">
	<div class="container">
		<div class="row">	
		<div class="col-sm-12 ">
		<div class="col-sm-10 col-sm-offset-1  text-center">
		<div class="four_zero_four_bg">
			<h1 class="text-center ">404</h1>
		
		
		</div>
		
		<div class="contant_box_404">
		<h3 class="h2">
		Opps!!!
		</h3>
		
		<p>Something went wrong</p>
		
		<a href="/chapters" class="link_404">Go to Home</a>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
  );
}

export default ErrorPage;