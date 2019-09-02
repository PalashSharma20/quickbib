<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectRecommendationsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('project_recommendations', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedInteger('project_id');
      $table
        ->foreign('project_id')
        ->references('id')
        ->on('projects');
      $table->text('data');
      $table->date('created_at')->default('NOW()');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('project_recommendations');
  }
}
