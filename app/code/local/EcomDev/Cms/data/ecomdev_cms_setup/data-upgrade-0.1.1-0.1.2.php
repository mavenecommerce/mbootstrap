<?php
$this->startSetup();

//
// Page
// --------------------------------------------------
$this->removePage("home", "all");

$home_page_content = <<<HTML
<div class="slideshow-container">
	<ul class="slideshow">
		<li><a href="{{config path="web/secure/base_url"}}accessories/eyewear.html"><img src="{{media url="wysiwyg/slide-1.jpg"}}" alt="An eye for detail - Click to Shop Eye Wear" /></a></li>
		<li style="display: none;"><a href="{{config path="web/secure/base_url"}}women.html"><img src="{{media url="wysiwyg/slide-2.jpg"}}" alt="Style solutions - covet-worthy styles in travel-friendly fabrics - Click to Shop Woman" /></a></li>
		<li style="display: none;"><a href="{{config path="web/secure/base_url"}}men.html"><img src="{{media url="wysiwyg/slide-3.jpg"}}" alt="Wing man - hit the runway in stylish separates and casuals - Click to Shop Man" /></a></li>
    </ul>
    <div class="slideshow-pager">&nbsp;</div>
    <span class="slideshow-prev">&nbsp;</span>
    <span class="slideshow-next">&nbsp;</span>
</div>

<ul class="promos">
	<li>
		<a href="{{config path="web/secure/base_url"}}home-decor.html">
			<img src="{{media url="wysiwyg/homepage-three-column-promo-01B.png"}}" alt="Physical &amp; Virtual Gift Cards" />
		</a>
	</li>
	<li>
		<a href="{{config path="web/secure/base_url"}}vip.html">
			<img src="{{media url="wysiwyg/homepage-three-column-promo-02.png"}}" alt="Shop Private Sales - Members Only" />
		</a>
	</li>
	<li>
		<a href="{{config path="web/secure/base_url"}}accessories/bags-luggage.html">
			<img src="{{media url="wysiwyg/homepage-three-column-promo-03.png"}}" alt="Travel Gear for Every Occasion" />
		</a>
	</li>
</ul>
HTML;

$home_page_xml = <<<XML
<reference name="content">
    <block type="catalog/product_new" name="home.catalog.product.new" template="catalog/product/new.phtml" after="cms_page">
        <action method="setProductsCount"><count>6</count></action>
        <action method="addPriceBlockType">
            <type>bundle</type>
            <block>bundle/catalog_product_price</block>
            <template>bundle/catalog/product/price.phtml</template>
        </action>
        <action method="setColumnCount"><count>6</count></action>
    </block>
</reference>
XML;
$this->installPage(array(
    "home" => array(
        "title" => "Home page",
        "content_heading" => "",
        "content" => $home_page_content,
        "root_template" => "one_column",
        "layout_update_xml" => $home_page_xml
    )
));
$this->endSetup();
