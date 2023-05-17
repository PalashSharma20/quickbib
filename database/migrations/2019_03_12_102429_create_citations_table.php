<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCitationsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('citations', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedInteger('project_id');
      $table
        ->foreign('project_id')
        ->references('id')
        ->on('projects');
      $table->unsignedInteger('user_id');
      $table
        ->foreign('user_id')
        ->references('id')
        ->on('users');
      $table->text('first_name')->nullable();
      $table->text('last_name')->nullable();
      $table->text('article_title')->nullable();
      $table->text('web_title')->nullable();
      $table->date('date')->nullable();
      $table->unsignedInteger('citation_source_id')->nullable();
      $table
        ->foreign('citation_source_id')
        ->references('id')
        ->on('citation_sources');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('citations');
  }
}