<?php
/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/osl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magentocommerce.com for more information.
 *
 * @category    EcomDev
 * @package     EcomDev_Cms
 * @copyright   Copyright (c) 2013 EcomDev (http://www.ecomdev.org)
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author      Chris Jones <leeked@gmail.com>
 */

$footerLinksBlock = Mage::getModel('cms/block')->load('footer_links', 'identifier');

if ($footerLinksBlock->getId()) {
    $content = $footerLinksBlock->getContent();
    if (preg_match('/<ul>(.*?)<\\/ul>/ims', $content, $matches)) {
        $content = preg_replace('/<ul>/ims', '<ul class="nav nav-pills">', $content);
        $footerLinksBlock->setContent($content)->save();
    }
}
