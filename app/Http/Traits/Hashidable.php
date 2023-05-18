<?php

namespace App\Http\Traits;

trait Hashidable
{
    public function getRouteKey()
    {
        return \Hashids::connection()->encode($this->getKey());
    }
}